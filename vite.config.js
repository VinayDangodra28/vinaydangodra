import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/", // Ensures correct asset paths for GitHub Pages
  server: {
    historyApiFallback: true
  }
});
