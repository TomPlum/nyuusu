import { ReactComponent as DeepL } from 'assets/DeepL_logo.svg'
import styles from './TranslateArticle.module.scss'
import { useTranslation } from "react-i18next"
import Typography from "components/Typography"
import { TranslateArticleProps } from "./types.ts"

const TranslateArticle = ({ onTranslate, currentLanguage }: TranslateArticleProps) => {
  const { t } = useTranslation('translation', { keyPrefix: 'views.home.articles.translate' })

  const isJapanese = currentLanguage === 'jp'
  const leftClass = isJapanese ? styles.japanese : styles.english
  const rightClass = isJapanese ? styles.english : styles.japanese
  const leftLineClass = isJapanese ? styles.lineJapaneseLeft : styles.lineEnglishLeft
  const rightLineClass = isJapanese ? styles.lineEnglishRight : styles.lineJapaneseRight

  return (
    <div className={styles.container}>
      <div className={styles.label}>
        <Typography>
          {t('label')}
        </Typography>
      </div>
      
      <div className={styles.content}>
        <span className={leftClass}>
          {isJapanese ? t('left') : t('right')}
        </span>

        <span className={leftLineClass} />

        <DeepL
          onClick={onTranslate}
          className={styles.deepl}
        />

        <span className={rightLineClass} />

        <span className={rightClass}>
          {isJapanese ? t('right') : t('left')}
        </span>
      </div>
    </div>
  )
}

export default TranslateArticle