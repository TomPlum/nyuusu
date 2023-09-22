import { NewsArticle } from "modules/Article/components/Article/types.ts"

export interface NewsFeed {
    loading: boolean
    articles?: NewsArticle[]
    details: NewsFeedDetails
}

export interface NewsFeedDetails {
    publisher?: string
    description?: string
    rssFeedLink: string
    title: string
}