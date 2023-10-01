import { TranslateButtonProps } from "modules/Article/components/TranslateButton/types.ts"
import { Translate } from "@mui/icons-material"
import styles from './TranslateButton.module.scss'
import { useTranslation } from "react-i18next"
import useTranslate from "hooks/useTranslate"

const TranslateButton = ({ text }: TranslateButtonProps) => {
  const { link } = useTranslate({ text })
  const { t } = useTranslation('translation', { keyPrefix: 'article.footer.translate' })

  return (
    <a
      href={link}
      target="_blank"
      rel='noreferrer'
      title={t('title')}
      className={styles.link}
    >
      <Translate />
    </a>
  )
}

export default TranslateButton