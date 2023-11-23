import { useTranslation } from "react-i18next"
import Typography from "components/Typography"
import styles from './YomichanArticle.module.scss'

const YomichanArticle = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'views.home.articles.yomichan' })

  return (
    <div className={styles.article}>
      <Typography useHorizontal>
        {t('body.one')}
      </Typography>
    </div>
  )
}

export default YomichanArticle
