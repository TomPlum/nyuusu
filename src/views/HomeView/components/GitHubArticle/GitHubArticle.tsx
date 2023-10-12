import { GitHub } from "@mui/icons-material"
import { useTranslation } from "react-i18next"
import Typography from "components/Typography"
import styles from './GitHubArticle.module.scss'

const GitHubArticle = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'views.home.articles.github' })

  return (
    <div className={styles.article}>
      <GitHub className={styles.github} />
      <Typography useHorizontal>
        {t('body')}
      </Typography>
      <a href={t('link')}>{t('link')}</a>
    </div>
  )
}

export default GitHubArticle