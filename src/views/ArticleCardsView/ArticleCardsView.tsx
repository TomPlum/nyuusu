import NewsGrid from "components/NewsGrid"
import styles from "./ArticleCardsView.module.scss"
import Article from "modules/Article/components/Article"
import { useCallback } from "react"
import { Grow } from "@mui/material"
import useArticles from "modules/Article/hooks/useArticles"
import Loading from "components/Loading"
import { useNavigate } from "react-router-dom"
import Grid from "@mui/material/Unstable_Grid2"

const ArticleCardsView = () => {
  const { articles, details, loading } = useArticles()
  const navigate = useNavigate()

  const handleSelectArticle = useCallback((id: number) => {
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
            <Grid key={i}>
              <Grow in timeout={i * 200} key={i}>
                <Article
                  feed={details}
                  article={article}
                  loading={loading}
                  key={article.title}
                  className={styles.article}
                  onClick={() => handleSelectArticle(i)}
                />
              </Grow>
            </Grid>
          ))}
        </NewsGrid>
      )}
    </div>
  )
}

export default ArticleCardsView