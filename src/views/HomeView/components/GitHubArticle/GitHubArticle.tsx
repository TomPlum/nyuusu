import { GitHub } from "@mui/icons-material"
import styles from './GitHubArticle.module.scss'

const GitHubArticle = () => {
  return (
    <div className={styles.article}>
      <GitHub className={styles.github} />
    </div>
  )
}

export default GitHubArticle