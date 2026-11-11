// Post-build checks for dist/: required files exist, every internal link and asset resolves to a built
// file, each page has one <h1>, a title, a description and a canonical URL, and JSON-LD parses.
// Runs after `astro build` (npm run build) locally and in the deploy workflow.
import { readFileSync, existsSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const dist = new URL("../dist/", import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1");
const problems = [];

const required = [
  "index.html",
  "404.html",
  "staticwebapp.config.json",
  "robots.txt",
  "llms.txt",
  "llms-full.txt",
  "sitemap-index.xml",
  "favicon.svg",
  "favicon.ico",
];
for (const file of required) {
  if (!existsSync(join(dist, file))) problems.push(`missing ${file}`);
}

const walk = (dir) =>
  readdirSync(dir).flatMap((name) => {
    const full = join(dir, name);
    return statSync(full).isDirectory() ? walk(full) : [full];
  });
const pages = walk(dist).filter((f) => f.endsWith(".html") && !f.includes("google"));

// A URL path resolves when it is a file, a .html file without the extension, or a folder index.
const resolves = (path) => {
  const clean = decodeURIComponent(path.split(/[?#]/)[0]).replace(/^\//, "");
  if (clean === "") return true;
  if (clean.startsWith("api/")) return true;
  return [clean, `${clean}.html`, join(clean, "index.html")].some((p) => existsSync(join(dist, p)));
};

for (const page of pages) {
  const html = readFileSync(page, "utf8");
  const name = relative(dist, page);
  const refs = [...html.matchAll(/\s(?:href|src)="(\/[^"]*)"/g)].map((m) => m[1]);
  const srcsets = [...html.matchAll(/\ssrcset="([^"]*)"/g)].flatMap((m) =>
    m[1].split(",").map((part) => part.trim().split(/\s+/)[0]),
  );
  for (const ref of [...refs, ...srcsets.filter((s) => s.startsWith("/"))]) {
    if (!resolves(ref)) problems.push(`${name}: broken link ${ref}`);
  }
  const h1 = (html.match(/<h1[\s>]/g) || []).length;
  if (h1 !== 1) problems.push(`${name}: ${h1} <h1> elements`);
  if (!/<title>[^<]{10,}<\/title>/.test(html)) problems.push(`${name}: missing <title>`);
  const indexed = !/<meta name="robots" content="noindex/.test(html);
  if (indexed && !/<meta name="description" content="[^"]{50,}"/.test(html)) problems.push(`${name}: short or missing description`);
  const canonical = html.match(/<link rel="canonical" href="(https:\/\/[^"]+)"/)?.[1];
  if (!canonical) problems.push(`${name}: missing canonical`);
  else {
    // index.html -> "/", sobre.html -> "/sobre", contato/obrigado.html -> "/contato/obrigado".
    const expected = "/" + name.replace(/\\/g, "/").replace(/\.html$/, "").replace(/(^|\/)index$/, "");
    if (new URL(canonical).pathname !== expected) problems.push(`${name}: canonical ${canonical}, expected path ${expected}`);
    const ogUrl = html.match(/<meta property="og:url" content="([^"]+)"/)?.[1];
    if (ogUrl !== canonical) problems.push(`${name}: og:url ${ogUrl} differs from canonical`);
  }
  for (const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try {
      JSON.parse(m[1]);
    } catch (error) {
      problems.push(`${name}: invalid JSON-LD (${error.message})`);
    }
  }
}

if (problems.length) {
  console.error(`check-build: ${problems.length} problem(s)\n- ${problems.join("\n- ")}`);
  process.exit(1);
}
console.log(`check-build: ${pages.length} pages OK`);
