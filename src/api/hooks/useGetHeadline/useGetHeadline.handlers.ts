import { http, HttpResponse } from "msw"
import { useGetHeadlineResponses } from "./useGetHeadline.responses.ts"

export const useGetHeadlineHandlers = [
  http.get('*/top-headlines', () => {
    return HttpResponse.json(useGetHeadlineResponses)
  })
]