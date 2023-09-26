import { NewsArticle } from "modules/Article/components/Article/types.ts"

export interface PublisherModalProps {
    article: NewsArticle
    onClose: () => void
}