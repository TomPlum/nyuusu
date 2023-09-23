import { NewsFeedDetails } from "modules/Article/hooks/useArticles/types.ts"
import { NewsArticle } from "modules/Article/components/Article/types.ts"

export interface NewspaperProps {
    feed: NewsFeedDetails
    article: NewsArticle
    onNext: () => void
    onPrevious: () => void
}