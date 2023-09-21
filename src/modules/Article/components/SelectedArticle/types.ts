import { NewsArticle } from "api/hooks/useGetHeadline/types.ts"

export interface SelectedArticleProps {
    article: NewsArticle
    onClose: () => void
}