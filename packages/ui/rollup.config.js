import withSolid from "rollup-preset-solid";
import WindiCSS from "rollup-plugin-windicss";

export default withSolid([
  { input: "src/index.tsx", mappingName: "browser", plugins: [...WindiCSS()] },
  {
    input: "src/index.tsx",
    mappingName: "server",
    solidOptions: { generate: "ssr", hydratable: true },
    plugins: [...WindiCSS()],
  },
]);
