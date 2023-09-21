import { NewsArticle } from "api/hooks/useGetHeadline/types.ts"

export interface ArticleProps {
    loading: boolean
    details: NewsArticle
}