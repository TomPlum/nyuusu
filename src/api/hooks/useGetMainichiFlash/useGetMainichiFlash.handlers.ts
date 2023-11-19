import { useGetMainichiFlashResponses } from "./useGetMainichiFlash.responses.ts"
import { http, HttpResponse } from "msw"

export const useGetMainichiFlashHandlers = [
  http.get<never>('*/rss/etc/mainichi-flash.rss', () => {
    return HttpResponse.json(useGetMainichiFlashResponses)
  })
]