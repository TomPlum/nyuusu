import NewsGrid from "components/NewsGrid"
import styles from "./CardsHeadlineView.module.scss"
import Article from "modules/Article/components/Article"
import SelectedArticle from "modules/Article/components/SelectedArticle"
import { useCallback, useState } from "react"
import { Grow } from "@mui/material"
import useArticles from "modules/Article/hooks/useArticles"
import { NewsArticle } from "modules/Article/components/Article/types.ts"
import Loading from "components/Loading"
import { useNavigate } from "react-router-dom"

const CardsHeadlineView = () => {
  const { articles, details, loading } = useArticles()
  const navigate = useNavigate()
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle>()

  const handleSelectArticle = useCallback((id: number, article: NewsArticle) => {
    setSelectedArticle(article)
    navigate(`/newspaper?article=${id}`)
  }, [navigate])

  return (
    <div className={styles.cardsView}>
      {loading && (
        <Loading />
      )}

      {!loading && (
        <NewsGrid className={styles.grid}>
          {articles?.map((article, i) => (
            <Grow in timeout={i * 200} key={i}>
              <Article
                feed={details}
                article={article}
                loading={loading}
                key={article.title}
                className={styles.article}
                onClick={article => handleSelectArticle(i, article)}
              />
            </Grow>
          ))}
        </NewsGrid>
      )}

      {selectedArticle && (
        <SelectedArticle
          feed={details}
          article={selectedArticle}
          onClose={() => setSelectedArticle(undefined)}
        />
      )}
    </div>
  )
}

export default CardsHeadlineView