import { BannerProps } from "modules/Newspaper/components/Banner/types.ts"
import styles from "./Banner.module.scss"
import PublicationDate from "modules/Article/components/PublicationDate"
import Grid from "@mui/material/Unstable_Grid2"
import PublisherHeading from "modules/Newspaper/components/PublisherHeading"

const Banner = ({ title, publisher, publishDate }: BannerProps) => {
  return (
    <Grid container className={styles.banner}>
      <Grid xs={12} md={9} className={styles.publisherContainer}>
        <PublisherHeading
          title={title}
          name={publisher}
        />
      </Grid>

      <Grid xs={12} md={3}>
        <PublicationDate
          className={styles.date}
          publishDate={publishDate}
        />
      </Grid>
    </Grid>
  )
}

export default Banner