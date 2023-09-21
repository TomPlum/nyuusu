import { setupWorker } from 'msw'
import { useGetHeadlineHandlers } from "../api/hooks/useGetHeadline/useGetHeadline.handlers.js"

export const worker = setupWorker(...[
  ...useGetHeadlineHandlers
])