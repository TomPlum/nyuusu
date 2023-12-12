import {http, HttpHandler, HttpResponse} from "msw";
import {newsCatcherResponse} from "./news.responses";

export const useNewsCatcherHandlers: HttpHandler[] = [
    http.get('*/v2/latest_headlines', () => {
        return HttpResponse.json(newsCatcherResponse)
    })
]