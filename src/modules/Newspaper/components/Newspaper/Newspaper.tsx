import { NewspaperProps } from "modules/Newspaper/components/Newspaper/types.ts"
import styles from "./Newspaper.module.scss"
import Grid from "@mui/material/Unstable_Grid2"
import Headline from "modules/Newspaper/components/Headline"
import { Container } from "@mui/material"
import Banner from "modules/Newspaper/components/Banner"
import RatingArticle from "modules/Newspaper/components/RatingArticle"

const Newspaper = ({ article, feed }: NewspaperProps) => {
  return (
    <div className={styles.newspaper} data-testid='newspaper'>
      <Grid className={styles.content}>
        <Container maxWidth='xl'>
          <Banner
            publishDate={article.publishDate}
            publisher={feed.publisher ?? 'Unknown'}
          />
        </Container>

        <Grid container spacing={2}>
          <Container maxWidth='xl'>
            <Headline headline={article.title} />
          </Container>

          <Grid container>
            <Grid xs={12} lg={6}>
              <RatingArticle text={article.title} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default Newspaper