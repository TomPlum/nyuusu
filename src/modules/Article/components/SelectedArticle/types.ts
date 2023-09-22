import { NewsArticle } from "modules/Article/components/Article/types.ts"
import { NewsFeedDetails } from "modules/Article/hooks/useArticles/types.ts"

export interface SelectedArticleProps {
    article: NewsArticle
    feed: NewsFeedDetails
    onClose: () => void
}