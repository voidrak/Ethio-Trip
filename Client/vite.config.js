import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
const apiBaseUrl = process.env.VITE_API_BASE_URL || 'http://127.0.0.1:8000';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },

  server: {
    proxy: {
      "/api": {
        target: apiBaseUrl,
        changeOrigin: true,
        headers: {
          Accept: "application/json",
          // "Content-Type": "application/json",
        },
      },
    },
  },
})
