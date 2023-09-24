import { NavigationArticleProps } from "modules/Newspaper/components/NavigationArticle/types.ts"
import styles from './NavigationArticle.module.scss'
import { IconButton } from "@mui/material"
import { ChevronLeft, ChevronRight } from "@mui/icons-material"
import { useTranslation } from "react-i18next"

const NavigationArticle = ({ article, articles, onNext, onPrevious }: NavigationArticleProps) => {
  const { t } = useTranslation('translation', { keyPrefix: 'newspaper.article.navigation' })

  return (
    <div className={styles.wrapper}>
      <p className={styles.desc}>
        {t('description')}
      </p>

      <div className={styles.buttons}>
        <IconButton onClick={onPrevious} className={styles.last}>
          <ChevronLeft />
        </IconButton>

        <p className={styles.numbers}>
          {article + 1} / {articles}
        </p>

        <IconButton onClick={onNext} className={styles.next}>
          <ChevronRight />
        </IconButton>
      </div>
    </div>
  )
}

export default NavigationArticle