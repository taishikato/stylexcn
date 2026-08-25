import path from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import stylex from "@stylexjs/unplugin";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    stylex.vite({
      useCSSLayers: true,
      dev: process.env.NODE_ENV !== "production",
      runtimeInjection: false,
      unstable_moduleResolution: {
        type: "commonJS",
        rootDir: path.resolve(__dirname),
      },
    }),
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
