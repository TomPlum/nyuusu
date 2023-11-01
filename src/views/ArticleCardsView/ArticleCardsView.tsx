import NewsGrid from "components/NewsGrid"
import styles from "./ArticleCardsView.module.scss"
import Article from "modules/Article/components/Article"
import { CSSProperties, useCallback, useEffect, useState } from "react"
import { Grow } from "@mui/material"
import Loading from "components/Loading"
import { useNavigate } from "react-router-dom"
import Grid from "@mui/material/Unstable_Grid2"
import useNewsFeed from "modules/Article/hooks/useNewsFeed"
import useNewsContext from "context"
import classNames from "classnames"
import { CardsHeadlineViewProps } from "views/ArticleCardsView/types.ts"

const ArticleCardsView = ({ animate = false, xTranslate = 0, yTranslate = 0 }: CardsHeadlineViewProps) => {
  const navigate = useNavigate()
  const [grow, setGrow] = useState(false)
  const { shouldLoadPage } = useNewsContext()
  const { articles, loading } = useNewsFeed()

  useEffect(() => {
    setTimeout(() => {
      setGrow(animate)
    }, 100)
  }, [animate])

  const handleSelectArticle = useCallback((id: number) => {
    navigate(`/newspaper?article=${id}`)
  }, [navigate])

  const style = {
    "--translate": `${xTranslate}% ${yTranslate}%`,
  } as CSSProperties

  return (
    <div
      style={style}
      className={classNames(
        styles.cardsView,
        { [styles['cardsView--load-page']]: shouldLoadPage }
      )}
    >
      {loading && (
        <Loading />
      )}

      {!loading && (
        <NewsGrid className={styles.grid}>
          {articles?.map((article, i) => (
            <Grid key={i}>
              {grow && (
                <Grow in timeout={i * 200} key={i}>
                  <Article
                    article={article}
                    loading={loading}
                    key={article.title}
                    className={styles.article}
                    onClick={() => handleSelectArticle(i)}
                  />
                </Grow>
              )}

              {!grow && (
                <Article
                  article={article}
                  loading={loading}
                  key={article.title}
                  className={styles.article}
                  onClick={() => handleSelectArticle(i)}
                />
              )}
            </Grid>
          ))}
        </NewsGrid>
      )}
    </div>
  )
}

export default ArticleCardsView