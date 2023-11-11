import NewsGrid from "components/NewsGrid"
import styles from "./ArticleCardsView.module.scss"
import Article from "modules/Article"
import { useCallback } from "react"
import { Grow } from "@mui/material"
import Loading from "components/Loading"
import { useNavigate } from "react-router-dom"
import Grid from "@mui/material/Unstable_Grid2"
import useNewsFeed from "modules/Article/hooks/useNewsFeed"
import TornPaperFooter from "components/TornPaperFooter"

const ArticleCardsView = () => {
  const navigate = useNavigate()
  const { articles, loading } = useNewsFeed()

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

      <TornPaperFooter />
    </div>
  )
}

export default ArticleCardsView