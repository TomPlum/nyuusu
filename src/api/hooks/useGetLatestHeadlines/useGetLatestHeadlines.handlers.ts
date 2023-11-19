import { HttpHandler, http, HttpResponse } from "msw"
import { useGetLatestHeadlinesResponses } from "api/hooks/useGetLatestHeadlines/useGetLatestHeadlines.responses.ts"

export const useGetLatestHeadlinesHandlers: HttpHandler[] = [
  http.get('*/newscatcher-api-headlines', () => {
    return HttpResponse.json(useGetLatestHeadlinesResponses)
  })
]