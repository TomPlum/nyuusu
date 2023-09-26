import { useCallback, useEffect, useMemo } from "react"
import styles from './NewspaperView.module.scss'
import Newspaper from "modules/Newspaper/components/Newspaper"
import { useSearchParams } from "react-router-dom"
import useNewsFeed from "modules/Article/hooks/useNewsFeed"

const NewspaperView = () => {
  const [params, setParams] = useSearchParams()
  const { articles, loading } = useNewsFeed()

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


  return (
    <div className={styles.singleView}>
      {loading && (
        <div></div> // TODO: Create loading skeleton
      )}
      
      {!loading && articles && (
        <Newspaper
          onNext={moveRight}
          onPrevious={moveLeft}
          articleCount={articles.length}
          currentArticleId={selectedArticledId}
          article={articles[selectedArticledId]}
        />
      )}
    </div>
  )
}

export default NewspaperView