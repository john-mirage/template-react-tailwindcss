import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  base: "/repository-name/",
  plugins: [
    react({
      babel: {
        plugins: [["babel-plugin-styled-components", { fileName: false }]],
      },
    }),
  ],
  resolve: {
    alias: {
      "@components": resolve(__dirname, "src/components"),
      "@images": resolve(__dirname, "src/images"),
      "@test": resolve(__dirname, "src/test"),
      "@utils": resolve(__dirname, "src/utils"),
    },
  },
});
