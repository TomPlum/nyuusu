import useGetMainichiFlash from "api/hooks/useGetMainichiFlash"
import { NewsFeed } from "modules/Article/hooks/useArticles/types.ts"
import { useEffect, useMemo } from "react"
import { NewsArticle } from "modules/Article/components/Article/types.ts"
import useNewsContext from "context"

const useArticles = (): NewsFeed => {
  const { setArticles } = useNewsContext()
  const { data, isLoading } = useGetMainichiFlash()

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
      link: item.link
    }))
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
    details: {
      title,
      description,
      publisher,
      rssFeedLink,
    },
    loading: isLoading
  }
}

export default useArticles