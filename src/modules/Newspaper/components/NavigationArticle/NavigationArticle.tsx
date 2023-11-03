import { NavigationArticleProps } from "modules/Newspaper/components/NavigationArticle/types.ts"
import styles from './NavigationArticle.module.scss'
import { ChevronLeft, ChevronRight } from "@mui/icons-material"
import { useTranslation } from "react-i18next"
import { useSettingsContext } from "modules/Settings/context/useSettingsContext.ts"
import Typography from "components/Typography"
import { useMemo } from "react"

const NavigationArticle = ({ article, articles, onNext, onPrevious }: NavigationArticleProps) => {
  const { language } = useSettingsContext()
  const { t } = useTranslation('translation', { keyPrefix: 'newspaper.article.navigation' })

  const currentArticleNumber = useMemo(() => {
    const number = article + 1
    if (number < 10) {
      return `0${number}`
    }

    return number
  }, [article])

  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <div className={styles.buttons}>
          <div onClick={onPrevious} className={styles.last}>
            {language === 'en'
              ? <ChevronLeft />
              : <span>{t('backward')}</span>
            }
          </div>

          <p className={styles.numbers}>
            {currentArticleNumber} / {articles}
          </p>

          <div onClick={onNext} className={styles.next}>
            {language === 'en'
              ? <ChevronRight />
              : <span>{t('forward')}</span>
            }
          </div>
        </div>

        <Typography className={styles.desc}>
          {t('description')}
        </Typography>
      </div>
    </div>
  )
}

export default NavigationArticle