import React from 'react'
import ReactDOM from 'react-dom/client'
import NyuusuApplication from './NyuusuApplication.tsx'
import './index.css'
import { worker } from "./mocks/browser.ts"
import { QueryClientProvider } from "@tanstack/react-query"
import { queryClient } from "api/queryClient.ts"
import './i18n.ts'
import NewsContextProvider from "context/NewsContextProvider.tsx"
import SettingsContextProvider from "modules/Settings/context"

if (process.env.NODE_ENV === 'development') {
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
        <SettingsContextProvider>
          <NyuusuApplication />
        </SettingsContextProvider>
      </NewsContextProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
