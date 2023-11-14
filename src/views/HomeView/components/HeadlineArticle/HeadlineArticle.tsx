import { useTranslation } from "react-i18next"
import styles from './HeadlineArticle.module.scss'
import Typography from "components/Typography"
import { HeadlineArticleProps } from "views/HomeView/components/HeadlineArticle/types.ts"
import classNames from "classnames"

const HeadlineArticle = ({ className }: HeadlineArticleProps) => {
  const { t } = useTranslation('translation', { keyPrefix: 'views.home.articles.headline' })

  return (
    <div className={classNames(styles.wrapper, className)}>
      <Typography className={styles.text} forceVertical>
        {t('text')}
      </Typography>

      <div className={styles.liveContainer}>
        <div className={styles.circle} />

        <Typography className={styles.live} useHorizontal>
          {t('live')}
        </Typography>
      </div>

      <div className={styles.top} />
      <div className={styles.left} />
    </div>
  )
}

export default HeadlineArticle