import { useCallback, useEffect, useMemo } from "react"
import styles from './NewspaperView.module.scss'
import useArticles from "modules/Article/hooks/useArticles"
import Newspaper from "modules/Newspaper/components/Newspaper"
import { useSearchParams } from "react-router-dom"

const NewspaperView = () => {
  const [params, setParams] = useSearchParams()
  const { articles, details, loading } = useArticles()

  useEffect(() => {
    if (articles && !params.has('article')) {
      setParams('article=0')
    }
  }, [articles, params, setParams])

  const selectedArticledId = useMemo(() => {
    const value = params.get('article')

    if (value) {
      return Number(value)
    }

    return 0
  }, [params])

  const moveLeft = useCallback(() => {
    if (!articles) {
      return
    }

    if (selectedArticledId === 0) {
      setParams(`article=${articles.length - 1}`)
      return
    }

    setParams(`article=${selectedArticledId - 1}`)
  }, [articles, selectedArticledId, setParams])

  const moveRight = useCallback(() => {
    if (!articles) {
      return
    }

    if (selectedArticledId === articles.length - 1) {
      setParams(`article=0`)
      return
    }

    setParams(`article=${selectedArticledId + 1}`)
  }, [articles, selectedArticledId, setParams])

  const progress = useMemo(() => {
    if (articles) {
      const percentage =  ((selectedArticledId + 1) / articles.length) * 100
      return Math.round(percentage)
    }

    return 0
  }, [selectedArticledId, articles])

  return (
    <div className={styles.singleView}>
      {articles && (
        <Newspaper
          feed={details}
          onNext={moveRight}
          onPrevious={moveLeft}
          article={articles[selectedArticledId]}
        />
      )}
    </div>
  )
}

export default NewspaperView