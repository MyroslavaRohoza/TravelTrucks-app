import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ViteSvgSpritePlugin } from "vite-plugin-svg-sprite";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteSvgSpritePlugin({
      src: "src/icons",
      filename: "sprite.svg",
    }),
  ],
});
