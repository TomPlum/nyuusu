export interface ApiHosts {
  newsApi: string
  mainichiRss: string
  newsCatcherApi: string
}

export const hosts: Record<string, ApiHosts> = {
  development: {
    newsApi: 'https://local-news-api',
    mainichiRss: '',
    newsCatcherApi: ''
  },
  production: {
    newsApi: 'https://newsapi.org',
    mainichiRss: 'https://mainichi.jp/rss/etc',
    newsCatcherApi: import.meta.env.NEWSCATCHER_API_HOST
  }
}