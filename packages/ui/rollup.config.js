import withRollup from "rollup-preset-solid";

export default withRollup([
  { input: "src/index.tsx", mappingName: "browser" },
  {
    input: "src/index.tsx",
    mappingName: "server",
    solidOptions: { generate: "ssr", hydratable: true },
  },
]);
