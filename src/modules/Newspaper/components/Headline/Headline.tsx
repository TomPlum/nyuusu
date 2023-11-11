import { HeadlineProps } from "modules/Newspaper/components/Headline/types.ts"
import styles from './Headline.module.scss'
import { ContentCopy } from "@mui/icons-material"
import { useTranslation } from "react-i18next"
import { useCallback } from "react"
import { useToastContext } from "modules/Toast/useToastContext.ts"
import classNames from "classnames"
import Typography from "components/Typography"

const Headline = ({ headline, copyText, className }: HeadlineProps) => {
  const { fireToast } = useToastContext()
  const { t } = useTranslation('translation', { keyPrefix: 'newspaper.headline' })

  const copy = useCallback(() => {
    if (copyText) {
      navigator.clipboard.writeText(copyText).then(() => {
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
    }
  }, [copyText, fireToast, t])

  return (
    <div className={classNames(styles.headline, className)}>
      <Typography useHorizontal>
        {headline}
      </Typography>

      <div className={styles.copy} title={t('copy.label')} onClick={copy}>
        <ContentCopy />
      </div>
    </div>
  )
}

export default Headline