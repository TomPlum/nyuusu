import { useMemo } from "react"
import useMainichiArticles from "modules/Article/hooks/useMainichiArticles"
import useNewsCatcherArticles from "modules/Article/hooks/useNewsCatcherArticles"
import { NewsFeedResult } from "modules/Article/hooks/useNewsFeed/types.ts"

const useNewsFeed = (): NewsFeedResult => {
  const { articles: mainchi, loading: isMainichiLoading } = useMainichiArticles()
  const { articles: newscatcher, loading: isNewsCatcherLoading } = useNewsCatcherArticles()

  const articles = useMemo(() => {
    return mainchi.concat(newscatcher)
  }, [mainchi, newscatcher])

  return {
    articles,
    loading: isMainichiLoading || isNewsCatcherLoading
  }
}

export default useNewsFeed