import { useTranslation } from "react-i18next"
import styles from './HeadlineArticle.module.scss'
import Typography from "components/Typography"

const HeadlineArticle = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'views.home.articles.headline' })

  return (
    <div className={styles.wrapper}>
      <Typography className={styles.text}>
        {t('text')}
      </Typography>
      <div className={styles.left} />
    </div>
  )
}

export default HeadlineArticle