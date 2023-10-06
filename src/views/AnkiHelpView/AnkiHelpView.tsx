import { Alert, Button, Container } from "@mui/material"
import { useTranslation } from "react-i18next"
import styles from './AnkiHelpView.module.scss'
import { ReactComponent as AnkiStarLogo } from "assets/anki.svg"
import { Settings } from "@mui/icons-material"
import { useSettingsContext } from "modules/Settings/context/useSettingsContext.ts"
import AnkiTitle from "modules/Newspaper/components/AnkiTitle"
import { useCallback, useEffect, useMemo, useState } from "react"
import { NewsArticle } from "modules/Article/components/Article/types.ts"
import useGetAnkiDecks from "api/hooks/useGetAnkiDecks"
import useCreateAnkiDeck from "api/hooks/useCreateAnkiDeck"
import useCreateAnkiCard from "api/hooks/useCreateAnkiCard"
import useCreateAnkiModel from "api/hooks/useCreateAnkiModel"
import { AnkiAlert } from "views/AnkiHelpView/types.ts"

const AnkiHelpView = () => {
  const { setOpen, anki } = useSettingsContext()
  const [alerts, setAlerts] = useState<AnkiAlert[]>([])
  const { mutateAsync: createDeck } = useCreateAnkiDeck()
  const { mutateAsync: createModel } = useCreateAnkiModel()
  const { mutateAsync: createCardApi } = useCreateAnkiCard()
  const { data: decks, isError: getDecksError } = useGetAnkiDecks()
  const { t } = useTranslation('translation', { keyPrefix: 'views.anki-help' })

  const alert = useCallback((details: AnkiAlert) => {
    setAlerts(existing => {
      return existing.concat(details)
    })
  }, [])

  useEffect(() => {
    if (getDecksError) {
      alert({ type: 'error', message: t('get-decks-failed') })
    }
  }, [alert, getDecksError, t])

  const testArticle: NewsArticle = useMemo(() => {
    return {
      title: "杉咲花「たくさんの方に届けられたら」主演映画『市子』で釜山のレッドカーペットへ",
      body: "杉咲花主演最新作が第28回釜山国際ジソク部門に出品されたことに合わせ、" +
          "10月4日に開催されたオープニングセレモニーのレッドカーペットに杉咲さん、" +
          "若葉竜也、戸田彬弘監督が参加した。第28回釜山国際のオープニングセレモニーには、" +
          "邦画では『月』の宮沢りえ、石井裕也監督、『キリエのうた』のアイナ・ジ・エンド、松村北斗、" +
          "岩井俊二監督などのキャストが華々しくレッドカーペットを飾った。",
      link: "https://www.cinemacafe.net/article/2023/10/05/87847.html",
      publishDate: "2023-10-05 16:15:00",
      rights: "cinemacafe.net"
    }
  }, [])

  const handleTestAddAnkiCard = () => {
    setAlerts([])

    if (decks && !decks.includes(anki.deckName)) {
      createDeck({ deck: anki.deckName }).then(() => {
        alert({ type: 'info',  message: t('deck-created', { deck: anki.deckName }) })
      }).catch(() => {
        alert({ type: 'error',  message: t('deck-creation-error') })
      })
    }

    createModel({
      modelName: "Nyusu Article",
      inOrderFields: ["Headline", "Excerpt", "SourceUrl"],
      cardTemplates: [
        {
          Name: "Nyuusu Card Template",
          Front: "Headline {{Headline}} Excerpt {{Excerpt}} SourceUrl {{SourceUrl}}",
          Back: "Headline Translated {{Headline}}"
        }
      ]
    }).then(() => {
      alert({ type: 'info',  message: t('model-created') })
    }).catch(() => {
      alert({ type: 'error',  message: t('add-model-failed') })
    })

    createCardApi({
      note: {
        deckName: anki.deckName,
        modelName: "Nyusu Article",
        fields: {
          Headline: testArticle.title,
          Excerpt: testArticle.body ?? '',
          SourceUrl: testArticle.link
        },
        tags: anki.tags
      }
    }).then(() => {
      alert({ type: 'info',  message: t('add-card-succeeded') })
    }).catch((e) => {
      console.log(e)
      alert({ type: 'error',  message: t('add-card-failed') })
    })
  }

  return (
    <Container maxWidth='md' className={styles.wrapper}>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>
          <AnkiStarLogo className={styles.ankiLogo} />
          {t('title')}
        </h2>
      </div>

      <div className={styles.instructions}>
        <h4>{t('prerequisites')}</h4>

        <ol className={styles.list}>
          <li>
            <p>{t('1')}</p>
            <a href='https://apps.ankiweb.net/'>
              {t('anki-website-link')}
            </a>
          </li>

          <li>
            <p>{t('2')}</p>
            <a href='https://ankiweb.net/shared/info/2055492159'>
              {t('anki-connect-link')}
            </a>
          </li>
            
          <li>
            <p>{t('3')}</p>
            <p>{t('whitelist-instructions')}</p>
          </li>
        </ol>
      </div>

      <div>
        <h4>{t('configuration')}</h4>
        <p>{t('about-settings')}</p>
        <Button
          variant='outlined'
          startIcon={<Settings />}
          onClick={() => setOpen(true)}
          className={styles.settingsButton}
        >
          {t('settings-button')}
        </Button>
      </div>

      <div className={styles.test}>
        <h4 className={styles.heading}>
          {t('test')}
        </h4>

        <p className={styles.testInfo}>
          {t('test-info', { button: t('anki-button') })}
        </p>

        <div className={styles.testContents}>
          <div className={styles.left}>
            <div className={styles.article}>
              <p className={styles.articleHeadline}>
                {testArticle.title}
              </p>

              <p>{testArticle.body}</p>

              {alerts.map(({ type, message }, i) => (
                <Alert key={i} severity={type}>
                  {message}
                </Alert>
              ))}
            </div>
          </div>

          <div className={styles.right}>
            <AnkiTitle
              button={t('anki-button')}
              onClick={handleTestAddAnkiCard}
            />
          </div>
        </div>
      </div>

      {/*TODO: Show error examples here and how to fix*/}
    </Container>
  )
}

export default AnkiHelpView