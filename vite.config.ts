import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
import react from "@vitejs/plugin-react";
import ViteSassPlugin from "vite-plugin-sass";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), ViteSassPlugin(), svgr()],
  resolve: {
    alias: {
      src: "/src",
    },
  },
});
