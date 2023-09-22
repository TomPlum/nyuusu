import { RatingArticleProps } from "modules/Newspaper/components/RatingArticle/types.ts"
import useLanguageStats from "modules/Article/hooks/useLanguageStats"
import { useTranslation } from "react-i18next"
import styles from './RatingArticle.module.scss'

const RatingArticle = ({ text }: RatingArticleProps) => {
  const { kanji } = useLanguageStats({ input: text })
  const { t } = useTranslation('translation', { keyPrefix: 'newspaper.article.rating' })

  return (
    <div className={styles.article}>
      <p className={styles.desc}>{t('description')}</p>
    </div>
  )
}

export default RatingArticle