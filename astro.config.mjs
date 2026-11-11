// Static site for www.linqcode.com.br, served by Azure Static Web Apps (dist/ + the Function in api/).
import { defineConfig, fontProviders } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://www.linqcode.com.br",
  // Same URLs the Next.js export had (/sobre, /solucoes...), so indexed pages keep their address.
  trailingSlash: "never",
  build: { format: "file", inlineStylesheets: "always" },
  compressHTML: true,
  prefetch: false,
  devToolbar: { enabled: false },
  integrations: [
    sitemap({
      filter: (page) => !page.includes("/obrigado") && !page.includes("/404"),
    }),
  ],
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Outfit",
      cssVariable: "--font-outfit",
      weights: ["300 800"],
      styles: ["normal"],
      subsets: ["latin"],
      fallbacks: ["system-ui", "sans-serif"],
    },
  ],
});
