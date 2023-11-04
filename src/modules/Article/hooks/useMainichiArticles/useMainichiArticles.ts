import useGetMainichiFlash from "api/hooks/useGetMainichiFlash"
import { NewsFeed } from "modules/Article/hooks/useNewsFeed/types.ts"
import { useEffect, useMemo } from "react"
import { NewsArticle } from "modules/Article/components/Article/types.ts"
import useNewsContext from "context"
import { NewsSource } from "modules/Settings/context/types.ts"

const useMainichiArticles = (): NewsFeed => {
  const { setArticles } = useNewsContext()
  const { data, isPending, fetchStatus } = useGetMainichiFlash()

  useEffect(() => {
    if (data) {
      setArticles(data.items.length)
    }
  }, [data, setArticles])

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
    loading: isPending && fetchStatus !== 'idle',
    source: NewsSource.MAINICHI_RSS_FLASH_NEWS
  }
}

export default useMainichiArticles