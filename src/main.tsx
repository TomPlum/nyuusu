import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { worker } from "./mocks/browser.ts"
import { QueryClientProvider } from "@tanstack/react-query"
import { queryClient } from "api/queryClient.ts"
import './i18n.ts'
import NewsContextProvider from "context/NewsContextProvider.tsx"
import SettingsContextProvider from "modules/Settings/context"
import { RouterProvider } from "react-router-dom"
import { router } from "./router.tsx"
import PageTransitionContextProvider from "modules/PageTransition/context"
import { SnackbarProvider } from "notistack"

if (process.env.NODE_ENV === 'development' && import.meta.env.VITE_MSW === 'true') {
  worker.start().then(() => {
    worker.listHandlers()
    console.debug('Mock service worked started...')
  }).catch((e) => {
    console.error('Mock service worker failed to start.', e)
  })
} else {
  console.debug(`NOT using the mock service worker since NODE_ENV is [${process.env.NODE}] and VITE_MSW is [${import.meta.env.VITE_MSW}]`)
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <NewsContextProvider>
        <SettingsContextProvider>
          <PageTransitionContextProvider>
            <SnackbarProvider anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}>
              <RouterProvider router={router} />
            </SnackbarProvider>
          </PageTransitionContextProvider>
        </SettingsContextProvider>
      </NewsContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
)