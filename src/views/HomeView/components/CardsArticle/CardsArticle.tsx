import { useTranslation } from "react-i18next"
import cardsAnimation from "assets/cards.gif"
import Typography from "components/Typography"
import { CardsArticleProps } from "views/HomeView/components/CardsArticle/types.ts"
import classNames from "classnames"
import styles from './CardsArticle.module.scss'

const CardsArticle = ({ className }: CardsArticleProps) => {
  const { t } = useTranslation('translation', { keyPrefix: 'views.home.articles.cards' })

  return (
    <div data-testid='home-newspaper-article' className={classNames(styles.wrapper, className)}>
      <img src={cardsAnimation} alt='cards'/>

      <Typography>
        {t('body')}
      </Typography>
    </div>
  )
}

export default CardsArticle