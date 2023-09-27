import { BannerProps } from "modules/Newspaper/components/Banner/types.ts"
import styles from "./Banner.module.scss"
import PublicationDate from "modules/Article/components/PublicationDate"
import { useTranslation } from "react-i18next"
import Grid from "@mui/material/Unstable_Grid2"

const Banner = ({ title, publisher, publishDate }: BannerProps) => {
  const { t } = useTranslation('translation', { keyPrefix: 'newspaper.banner' })

  return (
    <Grid container className={styles.banner}>
      <Grid xs={12} md={9} className={styles.publisherContainer}>
        <div className={styles.publisherWrapper}>
          <div className={styles.border}>
            <h1 className={styles.publisher}>
              {publisher ?? t('anonymous')}
            </h1>
          </div>

          <div className={styles.title}>
            {title}
          </div>
        </div>
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