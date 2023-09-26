import { BannerProps } from "modules/Newspaper/components/Banner/types.ts"
import styles from "./Banner.module.scss"
import PublicationDate from "modules/Article/components/PublicationDate"
import { useTranslation } from "react-i18next"

const Banner = ({ title, publisher, publishDate }: BannerProps) => {
  const { t } = useTranslation('translation', { keyPrefix: 'newspaper.banner' })

  return (
    <div className={styles.banner}>
      <div>
        <div className={styles.border}>
          <h1 className={styles.publisher}>
            {publisher ?? t('anonymous')}
          </h1>
        </div>

        <div className={styles.title}>
          {title}
        </div>
      </div>

      <PublicationDate
        className={styles.date}
        publishDate={publishDate}
      />
    </div>
  )
}

export default Banner