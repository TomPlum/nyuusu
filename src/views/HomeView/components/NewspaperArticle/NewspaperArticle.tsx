import styles from './NewspaperArticle.module.scss'
import { useTranslation } from "react-i18next"
import { NewspaperArticleProps } from "views/HomeView/components/NewspaperArticle/types.ts"
import classNames from "classnames"
import Typography from "components/Typography"
import { useNavigate } from "react-router-dom"

const NewspaperArticle = ({ className }: NewspaperArticleProps) => {
  const navigate = useNavigate()
  const { t } = useTranslation('translation', { keyPrefix: 'views.home.articles.newspaper' })

  return (
    <div data-testid='home-newspaper-article' className={classNames(styles.wrapper, className)} onClick={() => navigate('/newspaper')}>
      <div className={styles.inner}>
        <div className={styles.left}>
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