import { NewspaperProps } from "modules/Newspaper/components/Newspaper/types.ts"
import styles from "./Newspaper.module.scss"
import Grid from "@mui/material/Unstable_Grid2"
import Headline from "modules/Newspaper/components/Headline"
import Banner from "modules/Newspaper/components/Banner"
import RatingArticle from "modules/Newspaper/components/RatingArticle"
import TranslateArticle from "modules/Newspaper/components/TranslateArticle"
import NavigationArticle from "modules/Newspaper/components/NavigationArticle"
import { ArticleContents } from "modules/Newspaper/components/ArticleContents"

const Newspaper = ({ article, articleCount, currentArticleId, feed, onNext, onPrevious }: NewspaperProps) => {
  return (
    <div className={styles.newspaper} data-testid='newspaper'>
      <Grid container className={styles.content}>
        <Grid container xs={12}>
          <Banner
            title={feed.title}
            publishDate={article.publishDate}
            publisher={feed.publisher ?? 'Unknown'}
          />
        </Grid>

        <Grid xs={12}>
          <Headline headline={article.title} />
        </Grid>

        <Grid xs={12} justifyContent='center' alignItems='center'>
          <ArticleContents
            disclaimer={feed.rights}
            sourceUrl={article.link}
            publisher={feed.publisher}
          /> {/* TODO: Pass contents in here once got from an API */}
        </Grid>

        <Grid container spacing={{ xs: 4, md: 8 }} columns={12} sx={{ flexGrow: 1 }}>
          <Grid xs={12} lg={4} sx={{ borderRight: "1px solid black" }}>
            <RatingArticle text={article.title} />
          </Grid>

          <Grid xs={12} lg={4} sx={{ borderRight: "1px solid black" }}>
            <TranslateArticle text={article.title} />
          </Grid>

          <Grid xs={12} lg={4}>
            <NavigationArticle
              onNext={onNext}
              articles={articleCount}
              onPrevious={onPrevious}
              article={currentArticleId}
            />
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default Newspaper