import { defineConfig } from "astro/config";

import solid from "@astrojs/solid-js";
import deno from "@astrojs/deno";
import WindiCSS from "vite-plugin-windicss";

// https://astro.build/config
export default defineConfig({
  integrations: [solid()],
  adapter: deno(),
  vite: {
    plugins: [WindiCSS()],
  },
});
