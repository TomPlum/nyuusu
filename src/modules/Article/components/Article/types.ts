export interface ArticleProps {
    loading: boolean
    className?: string
    article: NewsArticle
    onClick: (article: NewsArticle) => void
}

export interface NewsArticle {
    title: string
    link: string
    author?: string
    subject?: string
    publishDate: string
}