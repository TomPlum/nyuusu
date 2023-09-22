import { NewsApiArticle } from "api/hooks/useGetHeadline/types.ts"

export interface SelectedArticleProps {
    article: NewsApiArticle
    onClose: () => void
}