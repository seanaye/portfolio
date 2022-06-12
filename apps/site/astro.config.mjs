import { defineConfig } from "astro/config";

import solid from "@astrojs/solid-js";
import tailwind from "@astrojs/tailwind";
import deno from "@astrojs/deno";

// https://astro.build/config
export default defineConfig({
  integrations: [solid(), tailwind()],
  adapter: deno(),
});
