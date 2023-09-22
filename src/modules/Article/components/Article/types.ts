import { NewsApiArticle } from "api/hooks/useGetHeadline/types.ts"

export interface ArticleProps {
    loading: boolean
    className?: string
    details: NewsApiArticle
    onClick: (article: NewsApiArticle) => void
}

export interface NewsArticle {
    title: string
    link: string
    author?: string
    subject?: string
    publishDate: string
}