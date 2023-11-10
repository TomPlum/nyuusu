import { ReactComponent as DeepL } from 'assets/DeepL_logo.svg'
import styles from './TranslateArticle.module.scss'
import { useTranslation } from "react-i18next"
import Typography from "components/Typography"
import { TranslateArticleProps } from "./types.ts"
import { useCallback, useState } from "react"
import { Language } from "modules/Settings/components/LanguageSelector/types.ts"
import useDeepL from "api/hooks/useDeepL"
import { CircularProgress } from "@mui/material"
import classNames from "classnames"
import { useSettingsContext } from "modules/Settings/context/useSettingsContext.ts"

const TranslateArticle = ({ translationText, onTranslate, currentLanguage }: TranslateArticleProps) => {
  const { language: i18nLangauge } = useSettingsContext()
  const input = translationText.filter(value => value) as string[]
  const { mutateAsync, isPending } = useDeepL({ input })
  const [language, setLanguage] = useState<Language>(currentLanguage ?? 'jp')
  const { t } = useTranslation('translation', { keyPrefix: 'views.home.articles.translate' })

  const isJapanese = language === 'jp'
  const leftClass = isJapanese ? styles.japanese : styles.english
  const rightClass = isJapanese ? styles.english : styles.japanese
  const leftLineClass = isJapanese ? styles.lineJapaneseLeft : styles.lineEnglishLeft
  const rightLineClass = isJapanese ? styles.lineEnglishRight : styles.lineJapaneseRight

  const handleTranslate = useCallback(async () => {
    if (language === 'jp') {
      const { translations } = await mutateAsync()
      console.log(translations)
      setLanguage('en')
      onTranslate?.('en', translations.map(translation => translation.text))
    } else {
      setLanguage('jp')
      onTranslate?.('jp', input)
    }
  }, [input, language, mutateAsync, onTranslate])

  return (
    <div className={styles.container}>
      <div className={styles.label}>
        <Typography className={classNames({ [styles.rotate]: i18nLangauge === 'en' })}>
          {t('label')}
        </Typography>
      </div>
      
      <div className={styles.content}>
        <span className={leftClass}>
          {isJapanese ? t('left') : t('right')}
        </span>

        <span className={leftLineClass} />

        <div className={styles.deepl} onClick={handleTranslate}>
          {isPending
            ? <CircularProgress color='inherit' className={styles.loading}  />
            : <DeepL />
          }
        </div>

        <span className={rightLineClass} />

        <span className={rightClass}>
          {isJapanese ? t('right') : t('left')}
        </span>
      </div>
    </div>
  )
}

export default TranslateArticle