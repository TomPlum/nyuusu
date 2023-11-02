import { useTranslation } from "react-i18next"
import Typography from "components/Typography"
import { CardsArticleProps } from "views/HomeView/components/CardsArticle/types.ts"
import classNames from "classnames"
import styles from './CardsArticle.module.scss'
import { useCallback } from "react"
import useDelayedNavigation from "modules/PageTransition/hooks/useDelayedNavigation"
import { KeyboardArrowUp } from "@mui/icons-material"

const CardsArticle = ({ className, onNavigate }: CardsArticleProps) => {
  const { navigate } = useDelayedNavigation()
  const { t } = useTranslation('translation', { keyPrefix: 'views.home.articles.cards' })

  const handleNavigate = useCallback(() => {
    onNavigate()
    navigate('/articles')
  }, [navigate, onNavigate])

  return (
    <div
      title={t('hover-title')}
      onClick={handleNavigate}
      data-testid='home-newspaper-article'
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
          <div className={styles.direction}>
            <KeyboardArrowUp />
          </div>

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