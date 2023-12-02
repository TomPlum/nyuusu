import { HttpHandler, http, HttpResponse } from "msw"
import { useGetLatestHeadlinesResponses } from "api/hooks/useGetLatestHeadlines/useGetLatestHeadlines.responses.ts"

export const useGetLatestHeadlinesHandlers: HttpHandler[] = [
  http.get('*/news', () => {
    return HttpResponse.json(useGetLatestHeadlinesResponses)
  })
]