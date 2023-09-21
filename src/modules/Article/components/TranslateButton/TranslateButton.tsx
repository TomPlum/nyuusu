import { TranslateButtonProps } from "modules/Article/components/TranslateButton/types.ts"
import { Translate } from "@mui/icons-material"
import styles from './TranslateButton.module.scss'
import { useTranslation } from "react-i18next"

const TranslateButton = ({ text }: TranslateButtonProps) => {
  const { t } = useTranslation('translation', { keyPrefix: 'article.footer.translate' })

  return (
    <a
      target="_blank"
      rel='noreferrer'
      title={t('title')}
      className={styles.link}
      href={`https://www.deepl.com/en/translator#ja/en/${text}`}
    >
      <Translate />
    </a>
  )
}

export default TranslateButton