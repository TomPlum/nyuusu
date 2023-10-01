export interface NewsCatcherHeadlinesResponse {
    status: string
    total_hits: number
    page: number
    total_pages: number
    page_size: number
    articles: NewsCatcherArticleResponse[]
    user_input: NewsCatcherUserInputResponse
}

export interface NewsCatcherArticleResponse {
    title: string
    author: string
    published_date: string
    published_date_precision: string
    link: string
    clean_url: string
    excerpt: string
    summary: string
    rights: string
    rank: number,
    topic: string
    country: string
    language: string
    authors: string
    media: string
    is_opinion: boolean
    twitter_account: string | null
    _score: string | null
    _id: string
}

export interface NewsCatcherUserInputResponse {
    lang: string[] | null
    not_lang: string[] | null
    countries: string[] | null
    not_countries: string[] | null
    page: number,
    size: number,
    sources: string[] | null,
    not_sources: string[] | null
    topic: string | null
    from: string
}