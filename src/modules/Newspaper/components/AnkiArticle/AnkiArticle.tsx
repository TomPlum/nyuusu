import styles from './AnkiArticle.module.scss'
import useAnki from "hooks/useAnki"
import { CircularProgress } from "@mui/material"
import { AnkiArticleProps } from "modules/Newspaper/components/AnkiArticle/types.ts"
import { useCallback, useState } from "react"
import AnkiTitle from "modules/Newspaper/components/AnkiTitle"

export const AnkiArticle = ({ article }: AnkiArticleProps) => {
  const { createNyusuArticleCard } = useAnki()
  const [loading, setLoading] = useState(false)

  const handleCreateCard = useCallback(() => {
    setLoading(true)
    createNyusuArticleCard({
      headline: {
        japanese: article.title,
        english: 'undefined' // TODO: Replace this once translation API available
      },
      excerpt: {
        japanese: article.body,
        english: 'undefined' // TODO: Replace this once translation API available
      },
      sourceUrl: article.link,
      publishDate: article.publishDate,
      author: article.author,
    }).then(() => {
      setLoading(false)
    }).catch(e => {
      console.debug(e)
    })
  }, [article.author, article.body, article.link, article.publishDate, article.title, createNyusuArticleCard])

  return (
    <div className={styles.article}>
      {loading && <CircularProgress />}

      <AnkiTitle onClick={handleCreateCard} />
    </div>
  )
}

export default AnkiArticle