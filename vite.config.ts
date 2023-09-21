import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',
  resolve: {
    alias: {
      api: "/src/api",
      components: "/src/components",
      modules: "/src/modules",
      hooks: "/src/hooks",
      locales: "/src/locales",
      context: "/src/context",
      views: "/src/views"
    }
  },
  test: {
    environment: 'jsdom',
    include: ['**/*.test.{ts,tsx}'],
    globals: true,
    setupFiles: './src/setupTests.ts'
  }
})
