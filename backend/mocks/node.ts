import { setupServer } from 'msw/node'
import {useNewsCatcherHandlers} from "../api/news/news.handlers";

export const server = setupServer(...[
    ...useNewsCatcherHandlers
])