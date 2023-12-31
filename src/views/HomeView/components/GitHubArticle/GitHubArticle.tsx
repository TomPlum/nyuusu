import { GitHub } from "@mui/icons-material"
import styles from './GitHubArticle.module.scss'
import { useTranslation } from "react-i18next"

const GitHubArticle = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'views.home.articles.github' })

  return (
    <div className={styles.article}>
      <a className={styles.link} title={t('title')} href={t('link')} target='_blank' rel='noreferrer'>
        <div className={styles.circle} />
        <GitHub className={styles.github} />
      </a>
    </div>
  )
}

export default GitHubArticle