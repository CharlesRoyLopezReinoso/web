import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/web/',
  plugins: [react()],
  server: {
    proxy: {
      '/web/api': {
        target: 'https://api.openaq.org/v3',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/web\/api/, '')
      }
    }
  }
})