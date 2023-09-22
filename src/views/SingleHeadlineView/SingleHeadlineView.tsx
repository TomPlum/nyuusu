import { useCallback, useEffect, useMemo, useState } from "react"
import Article from "modules/Article/components/Article"
import { Button, LinearProgress } from "@mui/material"
import styles from './SingleHeadlineView.module.scss'
import { ChevronLeft, ChevronRight } from "@mui/icons-material"
import useArticles from "modules/Article/hooks/useArticles"
import Loading from "components/Loading"

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
      <Button onClick={moveLeft}>
        <ChevronLeft />
      </Button>

      {loading && (
        <Loading />
      )}
      
      {!loading && articles && (
        <div>
          <LinearProgress value={progress} variant='determinate' />
          <Article
            feed={details}
            loading={loading}
            onClick={() => {}}
            article={articles[current]}
          />
        </div>
      )}

      <Button onClick={moveRight}>
        <ChevronRight />
      </Button>
    </div>
  )
}

export default SingleHeadlineView