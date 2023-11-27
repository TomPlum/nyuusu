import { NewspaperProps } from "modules/Newspaper/types.ts"
import styles from "./Newspaper.module.scss"
import Grid from "@mui/material/Unstable_Grid2"
import Headline from "modules/Newspaper/components/Headline"
import Banner from "modules/Newspaper/components/Banner"
import RatingArticle from "modules/Newspaper/components/RatingArticle"
import NavigationArticle from "modules/Newspaper/components/NavigationArticle"
import { ArticleContents } from "modules/Newspaper/components/ArticleContents"
import AnkiArticle from "modules/Newspaper/components/AnkiArticle"
import TranslateArticle from "views/HomeView/components/TranslateArticle"
import { useCallback, useState } from "react"
import { Language } from "modules/Settings/components/LanguageSelector/types.ts"
import CardsArticle from "views/HomeView/components/CardsArticle"
import Footer from "modules/Newspaper/components/Footer"
import AnalysisControls from "modules/Analysis/components/AnalysisControls"

const Newspaper = ({ article, articleCount, currentArticleId, onNext, onPrevious }: NewspaperProps) => {
  const [translatedHeadline, setTranslatedHeadline] = useState<string>()
  const [translatedArticleBody, setTranslatedArticleBody] = useState<string>()

  const handleTranslate = useCallback((language: Language, translatedText: string[]) => {
    if (language === 'en') {
      setTranslatedHeadline(translatedText[0])
      setTranslatedArticleBody(translatedText[1])
    } else {
      setTranslatedHeadline(undefined)
      setTranslatedArticleBody(undefined)
    }
  }, [])

  return (
    <div className={styles.newspaper} data-testid='newspaper'>
      <Grid container className={styles.content}>
        <Grid container xs={12}>
          <Banner
            title={article.feedTitle}
            publisher={article.publisher}
            publishDate={article.publishDate}
          />
        </Grid>

        <Grid xs={12}>
          <Headline
            headline={translatedHeadline ?? article.title}
            copyText={translatedHeadline ?? article.title}
          />
        </Grid>

        <Grid xs={12} justifyContent='center' alignItems='center'>
          <div className={styles.articleContentsWrapper}>
            <ArticleContents
              disclaimer={article.rights}
              sourceUrl={article.link}
              publisher={article.publisher}
              className={styles.articleContents}
              contents={translatedArticleBody ?? article.body}
            />

            <NavigationArticle
              onNext={onNext}
              articles={articleCount}
              onPrevious={onPrevious}
              article={currentArticleId}
            />
          </div>
        </Grid>

        <Grid container columnSpacing={2} rowSpacing={2}>
          <Grid xs={12}>
            <div className={styles.analysisWrapper}>
              <AnalysisControls />
              <RatingArticle text={article.title} />
            </div>
          </Grid>

          <Grid xs={12}>
            <CardsArticle />
          </Grid>

          <Grid xs={12} lg={6}>
            <TranslateArticle
              onTranslate={handleTranslate}
              translationText={[article.title, article.body]}
            />
          </Grid>

          <Grid xs={12} lg={4}>
            <AnkiArticle article={article} />
          </Grid>
        </Grid>

        <Grid xs={12}>
          <Footer edition={currentArticleId + 1} />
        </Grid>
      </Grid>
    </div>
  )
}

export default Newspaper