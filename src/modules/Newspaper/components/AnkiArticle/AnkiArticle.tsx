import styles from './AnkiArticle.module.scss'
import useAnki from "hooks/useAnki"
import { Button, CircularProgress } from "@mui/material"
import { AnkiArticleProps } from "modules/Newspaper/components/AnkiArticle/types.ts"
import { useCallback, useState } from "react"
import { useSettingsContext } from "modules/Settings/context/useSettingsContext.ts"

export const AnkiArticle = ({ article }: AnkiArticleProps) => {
  const { createCard } = useAnki()
  const { anki } = useSettingsContext()
  const [loading, setLoading] = useState(false)

  const handleCreateCard = useCallback(() => {
    setLoading(true)
    createCard({
      note: {
        deckName: anki.deckName,
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
        tags: anki.tags
      }
    }).then(() => {
      setLoading(false)
    }).catch(e => {
      console.debug(e)
    })
  }, [anki.deckName, anki.tags, article.link, article.title, createCard])

  return (
    <div className={styles.article}>
      {loading && <CircularProgress />}

      <Button onClick={handleCreateCard}>
        Add Card
      </Button>
    </div>
  )
}

export default AnkiArticle