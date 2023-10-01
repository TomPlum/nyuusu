export interface NewsApiHeadlineResponse {
    status: string
    totalResults: number
    articles: NewsApiArticle[]
}

export interface NewsApiArticle {
    title: string
    author: string | null
    source: NewsApiArticleSource
    publishedAt: string
    url: string
}

export interface NewsApiArticleSource {
    id: string | null
    name: string
}