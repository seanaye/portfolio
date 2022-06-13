import withSolid from "rollup-preset-solid";

export default withSolid([
  { input: "src/index.tsx", mappingName: "browser" },
  {
    input: "src/index.tsx",
    mappingName: "server",
    solidOptions: { generate: "ssr", hydratable: true },
  },
]);
