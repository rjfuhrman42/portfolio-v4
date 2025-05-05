import { defineConfig, fontProviders } from "astro/config";

import mdx from "@astrojs/mdx";

import expressiveCode from "astro-expressive-code";

// https://astro.build/config
export default defineConfig({
  experimental: {
    fonts: [
      {
        provider: fontProviders.fontsource(),
        name: "Epilogue",
        cssVariable: "--font-epilogue",
        weights: ["100 900"],
      },
      {
        provider: fontProviders.fontsource(),
        name: "Fragment Mono",
        cssVariable: "--mono-font",
        weights: ["100 900"],
      },
    ],
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
