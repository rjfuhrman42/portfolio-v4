import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";

import expressiveCode from "astro-expressive-code";

// https://astro.build/config
export default defineConfig({
  experimental: {
    svg: true,
  },

  trailingSlash: "always",
  integrations: [
    expressiveCode({
      // Replace the default themes with a custom set of bundled themes:
      // "dracula" (a dark theme) and "solarized-light"
      themes: ["tokyo-night"],
    }),
    mdx(),
  ],
});
