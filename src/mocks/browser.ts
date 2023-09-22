import { setupWorker } from 'msw'
import { useGetHeadlineHandlers } from "../api/hooks/useGetHeadline/useGetHeadline.handlers.js"
import { useGetMainichiFlashHandlers } from "api/hooks/useGetMainichiFlash/useGetMainichiFlash.handlers.ts"

export const worker = setupWorker(...[
  ...useGetHeadlineHandlers,
  ...useGetMainichiFlashHandlers
])