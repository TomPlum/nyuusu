import useGetMainichiFlash from "api/hooks/useGetMainichiFlash"
import { NewsFeed } from "modules/Article/hooks/useArticles/types.ts"
import { useMemo } from "react"
import { NewsArticle } from "modules/Article/components/Article/types.ts"

const useArticles = (): NewsFeed => {
  const { data, isLoading } = useGetMainichiFlash()

  const articles: NewsArticle[] = useMemo(() => {
    return data?.items.map(item => ({
      title: item.title,
      author: item.creator,
      subject: item['dc:subject'],
      publishDate: item.isoDate,
      link: item.link
    })) ?? []
  }, [data?.items])
    
  const title = useMemo(() => {
    return data?.title ?? ''
  }, [data?.title])

  const description = useMemo(() => {
    return data?.description ?? ''
  }, [data?.description])

  const publisher = useMemo(() => {
    return data?.['dc:publisher'] ?? ''
  }, [data])

  const rssFeedLink = useMemo(() => {
    return data?.link ?? ''
  }, [data])

  return  {
    articles,
    title,
    description,
    publisher,
    rssFeedLink,
    loading: isLoading
  }
}

export default useArticles