import { useTranslation } from "react-i18next"
import AnkiTitle from "modules/Newspaper/components/AnkiTitle"
import { useNavigate } from "react-router-dom"
import styles from './AnkiArticle.module.scss'

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
        <p>{t('body')}</p>
      </div>
    </div>
  )
}

export default AnkiArticle