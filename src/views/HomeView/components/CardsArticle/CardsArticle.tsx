import { useTranslation } from "react-i18next"
import Typography from "components/Typography"
import { CardsArticleProps } from "views/HomeView/components/CardsArticle/types.ts"
import classNames from "classnames"
import styles from './CardsArticle.module.scss'

const CardsArticle = ({ className, onClick }: CardsArticleProps) => {
  const { t } = useTranslation('translation', { keyPrefix: 'views.home.articles.cards' })

  return (
    <div data-testid='home-newspaper-article' className={classNames(styles.wrapper, className)} onClick={onClick}>
      <div className={styles.inner}>
        <Typography className={styles.contents}>
          {t('body')}
        </Typography>
          
        <div className={styles.right}>
          <div className={styles.charContainer}>
            <div className={styles.circleBg} />
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