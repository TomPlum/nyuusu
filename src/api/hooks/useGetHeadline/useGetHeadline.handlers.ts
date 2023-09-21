import { rest } from "msw"
import { useGetHeadlineResponses } from "./useGetHeadline.responses.ts"

export const useGetHeadlineHandlers = [
  rest.get('*/top-headlines', (_req, res, ctx) => {
    return res(ctx.json(useGetHeadlineResponses))
  })
]