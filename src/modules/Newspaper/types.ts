import { NewsArticle } from "modules/Article/types.ts"

export interface NewspaperProps {
    article: NewsArticle
    articleCount: number
    currentArticleId: number
    onNext: () => void
    onPrevious: () => void
}