import { rest } from "msw"
import { useGetAsahiHeadlinesResponses } from "api/hooks/useGetAsahiHeadlines/useGetAsahiHeadlines.responses.ts"

export const useGetAsahiHeadlinesHandlers = [
  rest.get('*/rss/asahi/newsheadlines.rdf', (_req, res, ctx) => {
    return res(ctx.xml(useGetAsahiHeadlinesResponses))
  })
]