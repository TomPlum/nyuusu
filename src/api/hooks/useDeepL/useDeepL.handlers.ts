import { HttpHandler, http, HttpResponse } from "msw"
import { useDeepLResponses } from "api/hooks/useDeepL/useDeepL.responses.ts"

export const useDeepLHandlers: HttpHandler[] = [
  http.post('*/v2/translate', () => {
    return HttpResponse.json(useDeepLResponses)
  })
]