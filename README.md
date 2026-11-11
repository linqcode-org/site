# www.linqcode.com.br

Site institucional da Linqcode, feito em [Astro](https://astro.build) e publicado como arquivos estáticos no Azure Static Web Apps (`swa-linqcode-site`), com a Function de contato em `api/`.

## Rodar

```bash
npm ci
npm run dev      # http://localhost:4321
npm run build    # gera dist/ e roda scripts/check-build.mjs
npm run preview  # serve dist/
node --test api/test/*.test.js   # testes da Function (rode antes `npm ci --prefix api`)
```

## Onde mudar o conteúdo

- `src/data/site.ts`: telefone, e-mail, redes, textos de todas as páginas, serviços (as quatro entregas e o núcleo de IA e cloud).
- `src/data/clients.ts`: clientes e logos (`src/assets/clients/`).
- As páginas, o JSON-LD, o `llms.txt`, o `llms-full.txt` e o sitemap leem desses arquivos.

## O que o build entrega

- HTML pronto, sem JavaScript de framework; scripts só no menu do celular, no formulário e no Google Analytics (carregado depois da página).
- Imagens em AVIF e WebP no tamanho de cada tela (`astro:assets`); fonte Outfit servida pelo próprio site.
- SEO: título, descrição e URL canônica por página, Open Graph e Twitter Card (`public/og/`), JSON-LD de Organization, Service e BreadcrumbList, `sitemap-index.xml` e `robots.txt`.
- Leitura por IA: `/llms.txt` (mapa do site) e `/llms-full.txt` (todo o conteúdo em Markdown).
- `public/staticwebapp.config.json`: cache longo para `/_astro/*`, cabeçalhos de segurança, redirecionamentos e a página 404.

## Deploy

`.github/workflows/azure-static-web-apps.yml`: push na `master` publica em produção; cada pull request ganha uma URL de prévia no Static Web Apps, apagada quando o PR fecha.

O formulário envia pela Microsoft Graph com as configurações `EMAIL_SERVICE_*` do Static Web Apps.
