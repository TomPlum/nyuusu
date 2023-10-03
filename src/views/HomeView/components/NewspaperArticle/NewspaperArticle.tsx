import styles from './NewspaperArticle.module.scss'
import { useTranslation } from "react-i18next"
import newspaperAnimation from 'assets/newspaper.gif'
import { NewspaperArticleProps } from "views/HomeView/components/NewspaperArticle/types.ts"
import classNames from "classnames"
import Typography from "components/Typography"

const NewspaperArticle = ({ className }: NewspaperArticleProps) => {
  const { t } = useTranslation('translation', { keyPrefix: 'views.home.articles.newspaper' })

  return (
    <div data-testid='home-newspaper-article' className={classNames(styles.wrapper, className)}>
      <img  src={newspaperAnimation} />

      <Typography>
        {t('body')}
      </Typography>
    </div>
  )
}

export default NewspaperArticle