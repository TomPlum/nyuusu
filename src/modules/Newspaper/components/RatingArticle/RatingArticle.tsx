import { RatingArticleProps } from "modules/Newspaper/components/RatingArticle/types.ts"
import { useTranslation } from "react-i18next"
import styles from './RatingArticle.module.scss'
import LanguageChart from "modules/Newspaper/components/LanguageChart"
import useLanguageStats from "modules/Article/hooks/useLanguageStats"

const RatingArticle = ({ text }: RatingArticleProps) => {
  const { difficulty } = useLanguageStats({ input: text })
  const { t } = useTranslation('translation', { keyPrefix: 'newspaper.article.rating' })

  return (
    <div className={styles.article}>
      <div className={styles.chart}>
        <LanguageChart text={text} />
        <div className={styles.difficulty}>
          {[...difficulty].map((char, i) => (
            <span key={i}>{char}</span>
          ))}
        </div>
      </div>
      <p className={styles.desc}>
        {t('description')}
      </p>


    </div>
  )
}

export default RatingArticle