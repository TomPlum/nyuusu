export interface ArticleProps {
    id: string
    loading: boolean
    className?: string
    article: NewsArticle
    onClick: (article: NewsArticle) => void
}

export interface NewsArticle {
    title: string
    body?: string
    link: string
    author?: string
    subject?: string
    publishDate: string
    publisher?: string
    description?: string
    rssFeedLink?: string
    feedTitle?: string
    rights: string
}