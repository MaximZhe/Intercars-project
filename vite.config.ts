import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import path from 'path';
// https://vitejs.dev/config/

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@types': path.resolve(__dirname, './src/types'),
      '@components': path.resolve(__dirname, './src/components'),
      '@images': path.resolve(__dirname, './src/assets/images'),
    },
  },
 
  // base: "/Intercars-project/",
  base: "/Intercars-project/",
  plugins: [react(),svgr()],
  server: {
    host: true,
    proxy: {
      '/api' : 'http://rusv2.intercars-tickets.com'
    }
  },
})
