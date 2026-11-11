// /robots.txt: everything is public, including to AI crawlers (GPTBot, ClaudeBot, PerplexityBot, Google-Extended...).
import type { APIRoute } from "astro";
import { company } from "../data/site";

export const GET: APIRoute = () =>
  new Response(
    ["User-agent: *", "Allow: /", "Disallow: /api/", "", `Sitemap: ${company.url}/sitemap-index.xml`, ""].join("\n"),
    { headers: { "Content-Type": "text/plain; charset=utf-8" } },
  );
