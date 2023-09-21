import styles from "./Footer.module.scss"
import { useTranslation } from "react-i18next"

const Footer = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'footer' })

  return (
    <div className={styles.footer}>
      <p>
        {t('api-citation.prefix')}
        {' '}
        <a href='https://newsapi.org/s/japan-news-api' target="_blank" rel="noreferrer">
          {t('api-citation.name')}
        </a>
        {'.'}
      </p>
    </div>
  )
}

export default Footer