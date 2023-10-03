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

        <Grid xs={12} justifyContent='center' alignItems='center'>
          <ArticleContents
            contents={article.body}
            disclaimer={article.rights}
            sourceUrl={article.link}
            publisher={article.publisher}
          />
        </Grid>

        <Grid container spacing={{ xs: 4, md: 8 }} columns={12} sx={{ flexGrow: 1 }}>
          <Grid xs={12} lg={6} sx={{ borderRight: "1px solid black" }}>
            <NewspaperArticle />
          </Grid>

          <Grid xs={12} lg={6}>
            <CardsArticle />
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default HomeView