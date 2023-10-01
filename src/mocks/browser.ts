import { setupWorker } from 'msw'
import { useGetHeadlineHandlers } from "api/hooks/useGetHeadline/useGetHeadline.handlers.js"
import { useGetMainichiFlashHandlers } from "api/hooks/useGetMainichiFlash/useGetMainichiFlash.handlers.ts"
import { useGetLatestHeadlinesHandlers } from "api/hooks/useGetLatestHeadlines/useGetLatestHeadlines.handlers.ts"
import { useGetAsahiHeadlinesHandlers } from "api/hooks/useGetAsahiHeadlines/useGetAsahiHeadlines.handlers.ts"

export const worker = setupWorker(...[
  ...useGetHeadlineHandlers,
  ...useGetMainichiFlashHandlers,
  ...useGetLatestHeadlinesHandlers,
  ...useGetAsahiHeadlinesHandlers
])