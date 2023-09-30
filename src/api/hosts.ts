export interface ApiHosts {
  newsApi: string
  mainichiRss: string
  japanTimesRss: string,
  asahi: string,
  newsCatcherApi: string
}

export const hosts: Record<string, ApiHosts> = {
  development: {
    newsApi: 'https://local-news-api',
    mainichiRss: '',
    newsCatcherApi: '',
    japanTimesRss: '',
    asahi: ''
  },
  production: {
    newsApi: 'https://newsapi.org',
    mainichiRss: 'https://mainichi.jp/rss/etc',
    japanTimesRss: 'https://japantimes.co.jp/feed',
    asahi: 'http://rss.asahi.com/rss/asahi',
    newsCatcherApi: import.meta.env.NEWSCATCHER_API_HOST
  }
}