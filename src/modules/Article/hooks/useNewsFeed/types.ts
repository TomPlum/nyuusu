import { NewsArticle } from "modules/Article/types.ts"
import { NewsSource } from "modules/Settings/context/types.ts"

export interface NewsFeedResult {
    loading: boolean
    articles: NewsArticle[]
}

export interface NewsFeed {
    source: NewsSource
    loading: boolean
    articles: NewsArticle[]
}