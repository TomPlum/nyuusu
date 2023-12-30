import { defineConfig } from "cypress";
import vitePreprocessor from "cypress-vite"

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:5173',
    viewportWidth: 1920,
    viewportHeight: 1440,
    setupNodeEvents(on) {
      on('file:preprocessor', vitePreprocessor())
    }
  }
})
