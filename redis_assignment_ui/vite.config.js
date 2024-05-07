import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "tailwindcss";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",
  preview: {
    port: 3030,
    strictPort: true,
  },
  server: {
    port: 3030,
    strictPort: true,
    host: true,
    origin: "http://0.0.0.0:3030",
  },
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
})
