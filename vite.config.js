import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  base: "/react-medium-challenge/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // This lets Sass resolve @use "@/..." from anywhere
        includePaths: [path.resolve(__dirname, "src")],
        // Inject globals for every scss file
        additionalData: `@use "@/assets/sass/variables" as *;`,
      },
    },
  },
});
