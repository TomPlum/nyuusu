import styles from './NewspaperArticle.module.scss'
import { useTranslation } from "react-i18next"
import { NewspaperArticleProps } from "views/HomeView/components/NewspaperArticle/types.ts"
import classNames from "classnames"
import Typography from "components/Typography"
import useDelayedNavigation from "modules/PageTransition/hooks/useDelayedNavigation"
import { useCallback } from "react"

const NewspaperArticle = ({ className, onNavigate }: NewspaperArticleProps) => {
  const { navigate } = useDelayedNavigation()
  const { t } = useTranslation('translation', { keyPrefix: 'views.home.articles.newspaper' })

  const handleNavigate = useCallback(() => {
    onNavigate()
    navigate('/newspaper')
  }, [navigate, onNavigate])

  return (
    <div data-testid='home-newspaper-article' className={classNames(styles.wrapper, className)} onClick={handleNavigate}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <div className={styles.direction} />

          <p className={styles.title}>
            {t('title')}
          </p>

          <div className={styles.charContainer}>
            <div className={styles.circleBg} />
            <p className={styles.char}>
              {t('char')}
            </p>
          </div>
        </div>

        <Typography className={styles.contents}>
          <span>
            {t('body')}
          </span>

          <span className={styles.linkText}>
            {t('link-text')}
          </span>
        </Typography>
      </div>
    </div>
  )
}

export default NewspaperArticle