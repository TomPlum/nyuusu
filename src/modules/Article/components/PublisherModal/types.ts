import { NewsArticle } from "modules/Article/types.ts"

export interface PublisherModalProps {
    article: NewsArticle
    onClose: () => void
}