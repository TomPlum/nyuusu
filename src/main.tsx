import React from 'react'
import ReactDOM from 'react-dom/client'
import NyuusuApplication from './NyuusuApplication.tsx'
import './index.css'
import { worker } from "./mocks/browser.ts"
import { QueryClientProvider } from "@tanstack/react-query"
import { queryClient } from "api/queryClient.ts"
import './i18n.ts'
import NewsContextProvider from "context/NewsContextProvider.tsx"

if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'production') {
  worker.start().then(() => {
    worker.printHandlers()
    console.debug('Mock service worked started...')
  }).catch((e) => {
    console.error('Mock service worker failed to start.', e)
  })
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <NewsContextProvider>
        <NyuusuApplication />
      </NewsContextProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
