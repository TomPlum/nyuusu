import styles from './ErrorView.module.scss'
import { useTranslation } from "react-i18next"

const ErrorView = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'error-page' })

  return (
    <div className={styles.wrapper}>
      <div className={styles.message}>
        <p className={styles.title}>
          {t('title')}
        </p>

        <p className={styles.description}>
          {t('description')}
        </p>

        <a href='/articles'>{t('help')}</a>
      </div>
    </div>
  )
}

export default ErrorView