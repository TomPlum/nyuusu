export interface NewsHeadlineResponse {
    status: string
    totalResults: number
    articles: NewsArticle[]
}

export interface NewsArticle {
    title: string
    author: string | null
    source: NewsArticleSource
    publishedAt: string
    url: string
}

export interface NewsArticleSource {
    id: string | null
    name: string
}