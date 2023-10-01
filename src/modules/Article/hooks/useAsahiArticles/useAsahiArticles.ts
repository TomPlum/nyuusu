import { NewsFeed } from "modules/Article/hooks/useNewsFeed/types.ts"
import { useMemo } from "react"
import { NewsArticle } from "modules/Article/components/Article/types.ts"
import { NewsSource } from "modules/Settings/context/types.ts"
import useGetAsahiHeadlines from "api/hooks/useGetAsahiHeadlines"

const useAsahiArticles = (): NewsFeed => {
  const { data, isLoading, fetchStatus } = useGetAsahiHeadlines()

  const articles: NewsArticle[] | undefined = useMemo(() => {
    return data?.items.map(item => ({
      title: item.title,
      author: item.creator,
      subject: item['dc:subject'],
      publishDate: item['dc:date'],
      link: item.link,
      feedTitle: data?.title ?? '',
      description: data?.description ?? '',
      publisher: data?.['dc:publisher'] ?? '',
      rssFeedLink: data?.link ?? '',
      rights: data?.['dc:rights'] ?? ''
    })) ?? []
  }, [data])

  return  {
    articles,
    loading: isLoading && fetchStatus !== 'idle',
    source: NewsSource.MAINICHI_RSS_FLASH_NEWS
  }
}

export default useAsahiArticles