import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: Number(process.env.VITE_PORT) || 3000,
    host: process.env.VITE_HOST || 'localhost',
    open: process.env.VITE_HOST ? `http://${process.env.VITE_HOST}:${process.env.VITE_PORT}` : true,
   
  }
})
