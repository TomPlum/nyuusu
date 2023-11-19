import { http, HttpResponse } from "msw"
import { useGetAsahiHeadlinesResponses } from "api/hooks/useGetAsahiHeadlines/useGetAsahiHeadlines.responses.ts"

export const useGetAsahiHeadlinesHandlers = [
  http.get('*/rss/asahi/newsheadlines.rdf', () => {
    return HttpResponse.json(useGetAsahiHeadlinesResponses)
  })
]