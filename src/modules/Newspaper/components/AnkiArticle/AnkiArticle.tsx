import styles from './AnkiArticle.module.scss'
import useAnki from "hooks/useAnki"
import { Button, CircularProgress } from "@mui/material"
import { AnkiArticleProps } from "modules/Newspaper/components/AnkiArticle/types.ts"
import { useCallback } from "react"

export const AnkiArticle = ({ article }: AnkiArticleProps) => {
  const { loading, createCard } = useAnki()

  const handleCreateCard = useCallback(async () => {
    await createCard({
      note: {
        deckName: 'Nyusu',
        modelName: 'Basic',
        fields: {
          Back: {
            headline: article.title,
            source: article.link
          },
          Front: {
            headline: article.title,
            source: article.link
          }
        },
        tags: ['nyusu']
      }
    })
  }, [article.link, article.title, createCard])

  return (
    <div className={styles.article}>
      {loading && <CircularProgress />}
      <Button onClick={handleCreateCard}>Add Card</Button>
    </div>
  )
}

export default AnkiArticle