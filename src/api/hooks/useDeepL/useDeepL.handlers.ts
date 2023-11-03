import { RequestHandler, rest } from "msw"
import { useDeepLResponses } from "api/hooks/useDeepL/useDeepL.responses.ts"

export const useDeepLHandlers: RequestHandler[] = [
  rest.post('*/v2/translate', (_req, res, ctx) => {
    return res(ctx.json(useDeepLResponses))
  })
]