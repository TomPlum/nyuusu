import { HeadlineProps } from "modules/Newspaper/components/Headline/types.ts"
import styles from './Headline.module.scss'
import { ContentCopy } from "@mui/icons-material"
import { useTranslation } from "react-i18next"
import { useCallback } from "react"

const Headline = ({ headline }: HeadlineProps) => {
  const { t } = useTranslation('translation', { keyPrefix: 'newspaper.headline' })

  const copy = useCallback(() => {
    navigator.clipboard.writeText(headline)
  }, [headline])

  return (
    <div className={styles.headline}>
      {headline}

      <div className={styles.copy} title={t('copy')} onClick={copy}>
        <ContentCopy />
      </div>
    </div>
  )
}

export default Headline