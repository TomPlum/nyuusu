import { RatingArticleProps } from "modules/Newspaper/components/RatingArticle/types.ts"
import { useTranslation } from "react-i18next"
import styles from './RatingArticle.module.scss'
import LanguageChart from "modules/Newspaper/components/LanguageChart"

const RatingArticle = ({ text }: RatingArticleProps) => {
  const { t } = useTranslation('translation', { keyPrefix: 'newspaper.article.rating' })

  return (
    <div className={styles.article}>
      <div className={styles.top}>
        <p className={styles.desc}>{t('description')}</p>
        <div className={styles.chart}>
          <LanguageChart text={text} />
        </div>
      </div>

      <div className={styles.bottom}>

      </div>
    </div>
  )
}

export default RatingArticle