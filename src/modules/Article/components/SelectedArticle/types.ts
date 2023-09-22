import { NewsArticle } from "modules/Article/components/Article/types.ts"

export interface SelectedArticleProps {
    article: NewsArticle
    onClose: () => void
}