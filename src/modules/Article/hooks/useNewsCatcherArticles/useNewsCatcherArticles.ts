import { NewsFeed } from "modules/Article/hooks/useNewsFeed/types.ts"
import useGetLatestHeadlines from "api/hooks/useGetLatestHeadlines"
import { NewsArticle } from "modules/Article/components/Article/types.ts"
import { useMemo } from "react"
import { NewsSource } from "modules/Settings/context/types.ts"

const useNewsCatcherArticles = (): NewsFeed => {
  const { data, isInitialLoading } = useGetLatestHeadlines()

  const articles: NewsArticle[] | undefined = useMemo(() => {
    if (data) {
      return data.articles.map<NewsArticle>(article => {
        return {
          title: article.title,
          body: article.summary,
          link: article.link,
          author: article.author,
          subject: article.topic,
          publishDate: '2023-09-25T21:19:43+09:00', // TODO: Change to article.published_date once date parsing abstracted
          publisher: article.authors,
          rssFeedLink: undefined,
          rights: article.rights,
          description: undefined,
          feedTitle: undefined
        }
      })
    }

    return []
  }, [data])

  return  {
    articles,
    loading: isInitialLoading,
    source: NewsSource.NEWSCATCHER_API
  }
}

export default useNewsCatcherArticles