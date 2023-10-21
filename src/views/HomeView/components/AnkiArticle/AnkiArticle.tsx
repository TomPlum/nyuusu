import { useTranslation } from "react-i18next"
import AnkiTitle from "modules/Newspaper/components/AnkiTitle"
import { useNavigate } from "react-router-dom"
import styles from './AnkiArticle.module.scss'
import Typography from "components/Typography"

const AnkiArticle = () => {
  const navigate = useNavigate()
  const { t } = useTranslation('translation', { keyPrefix: 'views.home.articles.anki' })
    
  return (
    <div className={styles.wrapper}>

      <AnkiTitle
        button={t('button')}
        onClick={() => navigate('/anki')}
      />

      <div className={styles.body}>
        <div className={styles.topLeft}>
          <div className={styles.mask} />
        </div>

        <Typography useHorizontal className={styles.text}>
          {t('body')}
        </Typography>

        <div className={styles.bottomRight}>
          <div className={styles.mask} />
        </div>
      </div>
    </div>
  )
}

export default AnkiArticle