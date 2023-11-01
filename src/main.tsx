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
import ToastProvider from "modules/Toast/ToastProvider.tsx"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import PageTransitionContextProvider from "modules/PageTransition/context"

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
      <ReactQueryDevtools initialIsOpen={false} />
      <NewsContextProvider>
        <SettingsContextProvider>
          <PageTransitionContextProvider>
            <ToastProvider>
              <RouterProvider router={router} />
            </ToastProvider>
          </PageTransitionContextProvider>
        </SettingsContextProvider>
      </NewsContextProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)