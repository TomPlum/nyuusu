import NewsGrid from "components/NewsGrid"
import styles from "./CardsHeadlineView.module.scss"
import Article from "modules/Article/components/Article"
import useGetHeadline from "api/hooks/useGetHeadline"
import SelectedArticle from "modules/Article/components/SelectedArticle"
import { useCallback, useState } from "react"
import { NewsApiArticle } from "api/hooks/useGetHeadline/types.ts"
import { Grow } from "@mui/material"

const CardsHeadlineView = () => {
  const { data, isLoading } = useGetHeadline()

  const [selectedArticle, setSelectedArticle] = useState<NewsApiArticle>()

  const handleSelectArticle = useCallback((article: NewsApiArticle) => {
    setSelectedArticle(article)
  }, [])

  return (
    <div className={styles.cardsView}>
      <NewsGrid className={styles.grid}>
        {data?.articles.map((article, i) => (
          <Grow in timeout={i * 200} key={i}>
            <Article
              details={article}
              loading={isLoading}
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