import { defineConfig } from "vite";

export default defineConfig({
  root: ".",
  server: {
    open: false,
  },
  preview: {
    open: false,
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
    sourcemap: true,
    rollupOptions: {
      input: "index.html",
    },
  },
});
