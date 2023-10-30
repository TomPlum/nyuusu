import { useTranslation } from "react-i18next"
import Typography from "components/Typography"
import { CardsArticleProps } from "views/HomeView/components/CardsArticle/types.ts"
import classNames from "classnames"
import styles from './CardsArticle.module.scss'
import { useNavigate } from "react-router-dom"

const CardsArticle = ({ className }: CardsArticleProps) => {
  const navigate = useNavigate()
  const { t } = useTranslation('translation', { keyPrefix: 'views.home.articles.cards' })

  return (
    <div
      title={t('hover-title')}
      data-testid='home-newspaper-article'
      onClick={() => navigate('/articles')}
      className={classNames(styles.wrapper, className)}
    >
      <div className={styles.inner}>
        <Typography className={styles.contents}>
          <span>
            {t('body')}
          </span>

          <span className={styles.linkText}>
            {t('link-text')}
          </span>
        </Typography>
          
        <div className={styles.right}>
          <div className={styles.charContainer}>
            <div className={styles.circle} />
            <p className={styles.char}>
              {t('char')}
            </p>
          </div>

          <p className={styles.title}>
            {t('title')}
          </p>
        </div>
      </div>
    </div>
  )
}

export default CardsArticle