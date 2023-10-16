import { ReactComponent as DeepL } from 'assets/DeepL_logo.svg'
import styles from './TranslateArticle.module.scss'
import { useTranslation } from "react-i18next"
import Typography from "components/Typography"

const TranslateArticle = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'views.home.articles.translate' })

  return (
    <div className={styles.container}>
      <div className={styles.label}>
        <Typography>
          {t('label')}
        </Typography>
      </div>
      
      <div className={styles.content}>
        <span className={styles.left}>
          {t('left')}
        </span>

        <span className={styles.lineLeft} />
        <DeepL className={styles.deepl} />
        <span className={styles.lineRight} />

        <span className={styles.right}>
          {t('right')}
        </span>
      </div>
    </div>
  )
}

export default TranslateArticle