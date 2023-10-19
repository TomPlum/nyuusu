import styles from "./PublisherHeading.module.scss"
import { useTranslation } from "react-i18next"
import { PublisherHeadingProps } from "./types.ts"

const PublisherHeading = ({ name, title }: PublisherHeadingProps) => {
  const { t } = useTranslation('translation', { keyPrefix: 'newspaper.publisher' })

  return (
    <div className={styles.publisherWrapper}>
      <div className={styles.border}>
        <h1 className={styles.publisher}>
          {name ?? t('anonymous')}
        </h1>
      </div>

      <div className={styles.title}>
        {title}
      </div>
    </div>
  )
}

export default PublisherHeading