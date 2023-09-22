import NewsGrid from "components/NewsGrid"
import styles from "./CardsHeadlineView.module.scss"
import Article from "modules/Article/components/Article"
import SelectedArticle from "modules/Article/components/SelectedArticle"
import { useCallback, useState } from "react"
import { Grow } from "@mui/material"
import useArticles from "modules/Article/hooks/useArticles"
import { NewsArticle } from "modules/Article/components/Article/types.ts"

const CardsHeadlineView = () => {
  const { articles, details, loading } = useArticles()
  console.log(articles)
  console.log(details)

  const [selectedArticle, setSelectedArticle] = useState<NewsArticle>()

  const handleSelectArticle = useCallback((article: NewsArticle) => {
    setSelectedArticle(article)
  }, [])

  return (
    <div className={styles.cardsView}>
      <NewsGrid className={styles.grid}>
        {articles?.map((article, i) => (
          <Grow in timeout={i * 200} key={i}>
            <Article
              feed={details}
              article={article}
              loading={loading}
              key={article.title}
              className={styles.article}
              onClick={handleSelectArticle}
            />
          </Grow>
        ))}
      </NewsGrid>

      {selectedArticle && (
        <SelectedArticle
          article={selectedArticle}
          onClose={() => setSelectedArticle(undefined)}
        />
      )}
    </div>
  )
}

export default CardsHeadlineView