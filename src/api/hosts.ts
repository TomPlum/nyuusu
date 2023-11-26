export interface ApiHosts {
  newsApi: string
  mainichiRss: string,
  libreTranslateApi: string,
  japanTimesRss: string,
  asahi: string,
  newsCatcherApi: string
  anki: string
  deepl: string
  vercel: string
}

export const hosts: Record<string, ApiHosts> = {
  development: {
    newsApi: 'https://local-news-api',
    libreTranslateApi: 'https://libretranslate.com',
    mainichiRss: '',
    newsCatcherApi: '',
    japanTimesRss: '',
    asahi: '',
    anki: 'http://localhost:8765',
    deepl: 'https://local-deepl-api',
    vercel: 'https://nyuusu-git-dev-tomplums-projects.vercel.app'
  },
  production: {
    newsApi: 'https://newsapi.org',
    libreTranslateApi: 'https://libretranslate.com',
    mainichiRss: 'https://mainichi.jp/rss/etc',
    japanTimesRss: 'https://japantimes.co.jp/feed',
    asahi: 'https://rss.asahi.com/rss/asahi',
    newsCatcherApi: import.meta.env.NEWSCATCHER_API_HOST,
    anki: '127.0.0.1:8765',
    deepl: 'https://api-free.deepl.com',
    vercel: 'https://nyuusu.vercel.app'
  }
}