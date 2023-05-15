/* eslint-disable comma-dangle */
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["plugin:vue/vue3-essential", "standard-with-typescript"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json"],
  },
  plugins: ["vue"],
  rules: {
    "space-before-function-paren": 0,
    "@typescript-eslint/quotes": 0,
    quotes: 0,
    "comma-dangle": 0,
    "@typescript-eslint/comma-dangle": 0,
    "@typescript-eslint/space-before-function-paren": 0,
    "@typescript-eslint/explicit-function-return-type": 0,
  },
}
