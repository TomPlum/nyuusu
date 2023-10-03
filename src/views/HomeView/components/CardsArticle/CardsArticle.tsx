import { useTranslation } from "react-i18next"
import styles from "views/HomeView/components/NewspaperArticle/NewspaperArticle.module.scss"
import cardsAnimation from "assets/cards.gif"

const CardsArticle = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'home.articles.cards' })

  return (
    <div data-testid='home-newspaper-article' className={styles.wrapper}>
      <img  src={cardsAnimation} />
    </div>
  )
}

export default CardsArticle