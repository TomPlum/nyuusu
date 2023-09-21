export interface ApiHosts {
    newsApi: string
}

export const hosts: Record<string, ApiHosts> = {
    development: {
        newsApi: 'https://local-news-api'
    },
    production: {
        newsApi: 'https://newsapi.org'
    }
}