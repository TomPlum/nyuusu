import { NewspaperProps } from "modules/Newspaper/components/Newspaper/types.ts"
import styles from "./Newspaper.module.scss"
import Grid from "@mui/material/Unstable_Grid2"
import Headline from "modules/Newspaper/components/Headline"
import Banner from "modules/Newspaper/components/Banner"
import RatingArticle from "modules/Newspaper/components/RatingArticle"
import TranslateArticle from "modules/Newspaper/components/TranslateArticle"

const Newspaper = ({ article, feed }: NewspaperProps) => {
  return (
    <div className={styles.newspaper} data-testid='newspaper'>
      <Grid container className={styles.content}>
        <Grid container xs={12}>
          <Banner
            publishDate={article.publishDate}
            publisher={feed.publisher ?? 'Unknown'}
          />
        </Grid>

        <Grid container spacing={2}>
          <Grid xs={12}>
            <Headline headline={article.title} />
          </Grid>

          <Grid container>
            <Grid xs={12} lg={6}>
              <RatingArticle text={article.title} />
            </Grid>

            <Grid xs={12} lg={6}>
              <TranslateArticle text={article.title} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default Newspaper