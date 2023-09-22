import { NewsFeedDetails } from "modules/Article/hooks/useArticles/types.ts"

export interface ArticleProps {
    loading: boolean
    className?: string
    article: NewsArticle
    feed: NewsFeedDetails
    onClick: (article: NewsArticle) => void
}

export interface NewsArticle {
    title: string
    link: string
    author?: string
    subject?: string
    publishDate: string
}