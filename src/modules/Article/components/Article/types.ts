import { NewsArticle } from "api/hooks/useGetHeadline/types.ts"

export interface ArticleProps {
    loading: boolean
    className?: string
    details: NewsArticle
    onClick: (article: NewsArticle) => void
}