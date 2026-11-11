// /llms.txt (llmstxt.org): a short Markdown map of the site for AI assistants, built from the same data as the pages.
import type { APIRoute } from "astro";
import { company, allServices, nav } from "../data/site";

export const GET: APIRoute = () => {
  const lines = [
    `# ${company.name}`,
    "",
    `> ${company.description}`,
    "",
    `${company.legalName} (CNPJ ${company.cnpj}). Atendimento pelo WhatsApp ${company.phoneDisplay} e pelo e-mail ${company.email}.`,
    "",
    "## Páginas",
    "",
    `- [Início](${company.url}/): o que fazemos, como fazemos, tecnologias, depoimento e clientes`,
    ...nav.map((item) => `- [${item.label}](${company.url}${item.href})`),
    "",
    "## Soluções",
    "",
    ...allServices.map((s) => `- [${s.name}](${company.url}/solucoes#${s.anchor}): ${s.pitch}`),
    "",
    "## Optional",
    "",
    `- [Conteúdo completo em texto](${company.url}/llms-full.txt)`,
    "",
  ];
  return new Response(lines.join("\n"), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
