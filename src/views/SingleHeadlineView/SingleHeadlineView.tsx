import { useCallback, useEffect, useMemo, useState } from "react"
import styles from './SingleHeadlineView.module.scss'
import useArticles from "modules/Article/hooks/useArticles"
import Newspaper from "modules/Newspaper/components/Newspaper"

const SingleHeadlineView = () => {
  const { articles, details, loading } = useArticles()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (articles) {
      setCurrent(0)
    }
  }, [articles])

  const moveLeft = useCallback(() => {
    if (!articles) {
      return
    }

    if (current === 0) {
      setCurrent(articles.length - 1)
      return
    }

    setCurrent(current - 1)
  }, [current, articles])

  const moveRight = useCallback(() => {
    if (!articles) {
      return
    }

    if (current === articles.length - 1) {
      setCurrent(0)
      return
    }

    setCurrent(current + 1)
  }, [current, articles])

  const progress = useMemo(() => {
    if (articles) {
      const percentage =  ((current + 1) / articles.length) * 100
      return Math.round(percentage)
    }

    return 0
  }, [current, articles])

  return (
    <div className={styles.singleView}>
      {articles && (
        <Newspaper feed={details} article={articles[current]} />
      )}
    </div>
  )
}

export default SingleHeadlineView