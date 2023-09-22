import { NewsFeedDetails } from "modules/Article/hooks/useArticles/types.ts"

export interface PublisherModalProps {
    feed: NewsFeedDetails
    onClose: () => void
}