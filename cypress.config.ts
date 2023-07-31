import { defineConfig } from "cypress";

export default defineConfig({
  viewportWidth: 1900,
  viewportHeight: 1060,
  video: false,
  component: {
    devServer: {
      framework: "vue",
      bundler: "vite",
    },
  },
});
