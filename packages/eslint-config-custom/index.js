module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["solid"],
  extends: ["eslint:recommended", "plugin:solid/typescript", "prettier"],
  rules: {
    "react/jsx-key": "off",
  },
};
