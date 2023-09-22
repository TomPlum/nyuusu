export interface ApiHosts {
  newsApi: string
  mainichiRss: string
}

export const hosts: Record<string, ApiHosts> = {
  development: {
    newsApi: 'https://local-news-api',
    mainichiRss: ''
  },
  production: {
    newsApi: 'https://newsapi.org',
    mainichiRss: 'https://mainichi.jp/rss/etc'
  }
}