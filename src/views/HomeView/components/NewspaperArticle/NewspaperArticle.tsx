import styles from './NewspaperArticle.module.scss'
import { useTranslation } from "react-i18next"
import newspaperAnimation from 'assets/newspaper.gif'

const NewspaperArticle = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'home.articles.newspaper' })

  return (
    <div data-testid='home-newspaper-article' className={styles.wrapper}>
      <img  src={newspaperAnimation} />
    </div>
  )
}

export default NewspaperArticle