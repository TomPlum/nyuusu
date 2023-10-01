import { RequestHandler, rest } from "msw"
import { useGetLatestHeadlinesResponses } from "api/hooks/useGetLatestHeadlines/useGetLatestHeadlines.responses.ts"

export const useGetLatestHeadlinesHandlers: RequestHandler[] = [
  rest.get('*/newscatcher-api-headlines', (_req, res, ctx) => {
    return res(ctx.json(useGetLatestHeadlinesResponses))
  })
]