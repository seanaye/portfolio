import { defineConfig } from "windicss/helpers";
import typography from "windicss/plugin/typography";

const fileTypes = `{vue,html,jsx,tsx,astro}`;

export default defineConfig({
  darkMode: false, // or 'media' or 'class'
  corePlugins: {
    container: false,
  },
  theme: {
    extend: {},
  },
  plugins: [
    typography,
    // ...
  ],
  extract: {
    include: [
      `./src/**/*.${fileTypes}`,
      `./node_modules/@seanaye/**/*.${fileTypes}`,
    ],
    exclude: [".git"],
  },
});
