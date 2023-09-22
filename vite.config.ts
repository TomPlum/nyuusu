import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { nodePolyfills } from 'vite-plugin-node-polyfills'

// https://vitejs.dev/config/
export default defineConfig({
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  plugins: [react(), nodePolyfills()],
  base: './',
  resolve: {
    alias: {
      api: "/src/api",
      components: "/src/components",
      modules: "/src/modules",
      hooks: "/src/hooks",
      locales: "/src/locales",
      context: "/src/context",
      views: "/src/views",
      stream: 'stream-browserify'
    }
  },
  test: {
    environment: 'jsdom',
    include: ['**/*.test.{ts,tsx}'],
    globals: true,
    setupFiles: './src/setupTests.ts'
  }
})
