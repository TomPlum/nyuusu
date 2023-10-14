import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router-dom"
import styles from './HomeView.module.scss'
import Grid from "@mui/material/Unstable_Grid2"
import Typewriter from 'typewriter-effect'
import Banner from "modules/Newspaper/components/Banner"
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

const HomeView = () => {
  const navigate = useNavigate()
  const { t } = useTranslation('translation', { keyPrefix: 'views.home' })
  const titles: string[] = t('title', { returnObjects: true })

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
    body: t('article.body')
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
          <Banner
            title={article.feedTitle ?? ''}
            publishDate={article.publishDate}
            publisher={article.publisher ?? 'Unknown'}
          />
        </Grid>

        <Grid xs={12}>
          <Headline headline={headline} />
        </Grid>

        <div className={styles.grid}>
          <div className={styles.left}>
            <Grid xs={12} justifyContent='center' alignItems='center' className={styles.body}>
              <ArticleContents
                contents={article.body}
                disclaimer={article.rights}
                sourceUrl={article.link}
                publisher={article.publisher}
              />
            </Grid>

            <Grid container spacing={{ xs: 4, md: 4 }} columns={12} sx={{ flexGrow: 1 }}>
              <Grid container className={styles.typeArticleWrapper}>
                <Grid xs={12} lg={6}>
                  <NewspaperArticle
                    className={styles.article}
                    onClick={() => navigate('/newspaper')}
                  />
                </Grid>

                <Grid xs={12} lg={6}>
                  <CardsArticle
                    className={styles.article}
                    onClick={() => navigate('/articles')}
                  />
                </Grid>
              </Grid>

              <Grid xs={12} lg={6}>
                <AnkiArticle />
              </Grid>

              <Grid xs={6} lg={4}>
                <GitHubArticle />
              </Grid>
            </Grid>
          </div>

          <div className={styles.right}>
            <HeadlineArticle />
          </div>
        </div>
      </Grid>
    </div>
  )
}

export default HomeView