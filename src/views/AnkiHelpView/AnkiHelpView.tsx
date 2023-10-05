import { Alert, Button, Container } from "@mui/material"
import { useTranslation } from "react-i18next"
import styles from './AnkiHelpView.module.scss'
import { ReactComponent as AnkiStarLogo } from "assets/anki.svg"
import { Settings } from "@mui/icons-material"
import { useSettingsContext } from "modules/Settings/context/useSettingsContext.ts"
import AnkiTitle from "modules/Newspaper/components/AnkiTitle"
import { useMemo, useState } from "react"
import { NewsArticle } from "modules/Article/components/Article/types.ts"
import useGetAnkiDecks from "api/hooks/useGetAnkiDecks"
import useCreateAnkiDeck from "api/hooks/useCreateAnkiDeck"
import useCreateAnkiCard from "api/hooks/useCreateAnkiCard"

const AnkiHelpView = () => {
  const { setOpen, anki } = useSettingsContext()
  const [createdDeck, setCreatedDeck] = useState(false)
  const { mutateAsync: createDeck } = useCreateAnkiDeck()
  const [addCardFailed, setAddCardFailed] = useState(false)
  const { mutateAsync: createCardApi } = useCreateAnkiCard()
  const [addCardSucceeded, setAddCardSucceeded] = useState(false)
  const { data: decks, isError: getDecksError } = useGetAnkiDecks()
  const [createDeckError, setCreateDeckError] = useState<string>()
  const { t } = useTranslation('translation', { keyPrefix: 'views.anki-help' })

  const testArticle: NewsArticle = useMemo(() => {
    return {
      title: "杉咲花「たくさんの方に届けられたら」主演映画『市子』で釜山のレッドカーペットへ",
      body: "杉咲花主演最新作が第28回釜山国際ジソク部門に出品されたことに合わせ、" +
          "10月4日に開催されたオープニングセレモニーのレッドカーペットに杉咲さん、" +
          "若葉竜也、戸田彬弘監督が参加した。第28回釜山国際のオープニングセレモニーには、" +
          "邦画では『月』の宮沢りえ、石井裕也監督、『キリエのうた』のアイナ・ジ・エンド、松村北斗、" +
          "岩井俊二監督などのキャストが華々しくレッドカーペットを飾った。",
      link: "",
      publishDate: "",
      rights: ""
    }
  }, [])

  const handleTestAddAnkiCard = () => {
    setCreatedDeck(false)

    if (decks && !decks.includes(anki.deckName)) {
      createDeck({ deck: anki.deckName }).then(() => {
        setCreatedDeck(true)
      }).catch(() => {
        setCreateDeckError('Failed to create deck')
      })
    }

    createCardApi({
      note: {
        deckName: anki.deckName,
        modelName: "Basic",
        fields: {
          Front: {

          },
          Back: {

          }
        },
        tags: anki.tags
      }
    }).then(() => {
      setAddCardSucceeded(true)
    }).catch(e => {
      console.log(e)
      setAddCardFailed(true)
      // render error type and explain possible fixes
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

              {addCardSucceeded && (
                <Alert severity='success' className={styles.alert}>
                  {t('add-card-succeeded')}
                </Alert>
              )}

              {createdDeck && (
                <Alert severity='info' className={styles.alert}>
                  {t('deck-created')}
                </Alert>
              )}

              {createDeckError && (
                <Alert severity='error' className={styles.alert}>
                  {t('deck-creation-error')}
                </Alert>
              )}

              {addCardFailed && (
                <Alert severity='error' className={styles.alert}>
                  {t('add-card-failed')}
                </Alert>
              )}

              {getDecksError && (
                <Alert severity='error' className={styles.alert}>
                  {t('get-decks-failed')}
                </Alert>
              )}
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