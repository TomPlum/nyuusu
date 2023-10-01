import { rest } from "msw"
import { useGetMainichiFlashResponses } from "./useGetMainichiFlash.responses.ts"

export const useGetMainichiFlashHandlers = [
  rest.get('*/rss/etc/mainichi-flash.rss', (_req, res, ctx) => {
    return res(ctx.xml(useGetMainichiFlashResponses))
  })
]