import { defineConfig } from "cypress";

export default defineConfig({
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
    supportFile: "cypress/support/index.ts",
    viewportHeight: 768,
    viewportWidth: 1280,
  },
});
