import pluginVue from "eslint-plugin-vue";
import prettierConfigPlugin from "eslint-plugin-prettier/recommended";

export default [
  {
    name: "app/files-to-lint",
    files: ["**/*.{ts,mts,tsx,vue}"],
  },
  {
    name: "app/files-to-ignore",
    ignores: ["**/dist/**", "**/dist-ssr/**", "**/coverage/**"],
  },
  ...pluginVue.configs["flat/recommended"],
  prettierConfigPlugin,
];
