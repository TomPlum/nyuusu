import { NewsArticle } from "modules/Article/components/Article/types.ts"

export interface NewsFeed {
    loading: boolean
    publisher?: string
    description?: string
    rssFeedLink: string
    title: string
    articles?: NewsArticle[]
}