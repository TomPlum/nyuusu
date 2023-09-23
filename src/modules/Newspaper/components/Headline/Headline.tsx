import { HeadlineProps } from "modules/Newspaper/components/Headline/types.ts"
import styles from './Headline.module.scss'
import { ContentCopy } from "@mui/icons-material"
import { useTranslation } from "react-i18next"
import { useCallback } from "react"
import { useToastContext } from "modules/Toast/useToastContext.ts"

const Headline = ({ headline }: HeadlineProps) => {
  const { fireToast } = useToastContext()
  const { t } = useTranslation('translation', { keyPrefix: 'newspaper.headline' })

  const copy = useCallback(() => {
    navigator.clipboard.writeText(headline).then(() => {
      fireToast({
        type: 'success',
        timeout: 2000,
        message: t('copy.success')
      })
    }).catch(() => {
      fireToast({
        type: 'error',
        message: t('copy.error')
      })
    })
  }, [fireToast, headline, t])

  return (
    <div className={styles.headline}>
      {headline}

      <div className={styles.copy} title={t('copy.label')} onClick={copy}>
        <ContentCopy />
      </div>
    </div>
  )
}

export default Headline