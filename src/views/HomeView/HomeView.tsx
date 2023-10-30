import { useTranslation } from "react-i18next"
import styles from './HomeView.module.scss'
import Grid from "@mui/material/Unstable_Grid2"
import Typewriter from 'typewriter-effect'
import Headline from "modules/Newspaper/components/Headline"
import { ArticleContents } from "modules/Newspaper/components/ArticleContents"
import { useMemo } from "react"
import { NewsArticle } from "modules/Article/components/Article/types.ts"
import { format } from "date-fns"
import NewspaperArticle from "views/HomeView/components/NewspaperArticle"
import CardsArticle from "views/HomeView/components/CardsArticle"
import AnkiArticle from "views/HomeView/components/AnkiArticle"
import GitHubArticle from "views/HomeView/components/GitHubArticle"
import HeadlineArticle from "views/HomeView/components/HeadlineArticle"
import Footer from "./components/Footer"
import { ContentCut } from "@mui/icons-material"
import SettingsArticle from "views/HomeView/components/SettingsArticle"
import AnalysisArticle from "./components/AnalysisArticle"
import TranslateArticle from "views/HomeView/components/TranslateArticle"
import PublisherHeading from "modules/Newspaper/components/PublisherHeading"
import CurrentDateTime from "modules/Header/components/CurrentDateTime"
import { useSettingsContext } from "modules/Settings/context/useSettingsContext.ts"

const HomeView = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'views.home' })
  const titles: string[] = t('title', { returnObjects: true })
  const { language } = useSettingsContext()

  const todaysDate = useMemo(() => {
    return format(new Date(), 'yyyy-MM-dd\'T\'HH:mm:ssXXXXX')
  }, [])

  const article: NewsArticle = useMemo(() => ({
    title: 'unused', // <-- we're using the typewriter instead of this
    link: t('article.link'),
    publisher: t('article.publisher'),
    publishDate: todaysDate,
    feedTitle: t('article.feed-title'),
    rights: t('article.rights'),
    body: t('article.body') + t('article.body-2')
  }), [t, todaysDate])

  const headline = useMemo(() => {
    return (
      <Typewriter
        options={{
          loop: true,
          autoStart: true,
          strings: titles,
          delay: 'natural'
        }}
      />
    )
  }, [titles])

  return (
    <div className={styles.view} data-testid='home-view'>
      <div className={styles.grain} />

      <Grid container className={styles.content}>
        <Grid container xs={12}>
          {article.publisher && article.feedTitle && (
            <div className={styles.banner}>
              <PublisherHeading
                name={article.publisher}
                title={article.feedTitle}
              />

              <CurrentDateTime
                timeClass={styles.time}
                dateClass={styles.date}
                className={styles.currentDateTime}
              />
            </div>
          )}
        </Grid>

        <Grid xs={12}>
          <Headline headline={headline} />
        </Grid>

        <Grid container className={styles.grid} columnSpacing={0}>
          <Grid container className={styles.left} columnSpacing={3}>
            <Grid xs={12} justifyContent='center' alignItems='center' className={styles.body}>
              <ArticleContents
                contents={article.body}
                sourceUrl={article.link}
                disclaimer={article.rights}
                publisher={article.publisher}
                className={styles.articleContents}
              />
            </Grid>

            <Grid container className={styles.leftMiddle}>
              <Grid xs={12} lg={6}>
                <AnkiArticle />
                <SettingsArticle />
                <TranslateArticle
                  key={language}
                  translationText={[]}
                  currentLanguage={language}
                />
              </Grid>

              <Grid container xs={12} lg={6} rowSpacing={2}>
                <Grid flexGrow={1} xs={12}>
                  <div className={styles.cut}>
                    <div className={styles.cutInner}>
                      <ContentCut />
                      <span className={styles.dotted} />
                      <span className={styles.cutText}>{t('cut')}</span>
                      <span className={styles.dotted}/>
                    </div>
                  </div>
                </Grid>

                <Grid flexGrow={1} xs={12}>
                  <NewspaperArticle className={styles.article} />
                </Grid>

                <Grid flexGrow={1} xs={12}>
                  <CardsArticle className={styles.article} />
                </Grid>
              </Grid>
            </Grid>

            <Grid xs={12}>
              <AnalysisArticle className={styles.analysisArticle}/>
            </Grid>
          </Grid>

          <Grid container className={styles.right}>
            <Grid xs={12}>
              <HeadlineArticle />
            </Grid>

            <Grid xs={12}>
              <GitHubArticle />
            </Grid>
          </Grid>
        </Grid>

        <Grid container xs={12}>
          <Footer />
        </Grid>
      </Grid>
    </div>
  )
}

export default HomeView