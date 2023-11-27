import { HeadlineProps } from "modules/Newspaper/components/Headline/types.ts"
import styles from './Headline.module.scss'
import { ContentCopy } from "@mui/icons-material"
import { useTranslation } from "react-i18next"
import { useCallback } from "react"
import classNames from "classnames"
import Typography from "components/Typography"
import { useSnackbar } from "notistack"

const Headline = ({ headline, copyText, className }: HeadlineProps) => {
  const { enqueueSnackbar } = useSnackbar()
  const { t } = useTranslation('translation', { keyPrefix: 'newspaper.headline' })

  const copy = useCallback(() => {
    if (copyText) {
      navigator.clipboard.writeText(copyText).then(() => {
        enqueueSnackbar(t('copy.success'), {
          key: 'headline.copy.success',
          variant: 'success',
          autoHideDuration: 3000
        })
      }).catch(() => {
        enqueueSnackbar(t('copy.error'), {
          key: 'headline.copy.error',
          variant: 'error'
        })
      })
    }
  }, [copyText, enqueueSnackbar, t])

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