import { Settings } from '@mui/icons-material'
import styles from './SettingsArticle.module.scss'
import { useSettingsContext } from "modules/Settings/context/useSettingsContext.ts"
import { useCallback } from "react"
import { useTranslation } from "react-i18next"
import Typography from "components/Typography"

const SettingsArticle = () => {
  const { open, setOpen } = useSettingsContext()
  const { t } = useTranslation('translation', { keyPrefix: 'views.home.articles.settings' })

  const handleClick = useCallback(() => {
    setOpen(!open)
  }, [open, setOpen])

  return (
    <div className={styles.wrapper}>
      <div className={styles.test} />
      <div className={styles.lineOuter}>
        <div className={styles.lineInner} />
      </div>

      <Typography className={styles.text} useHorizontal>
        {t('left')}
      </Typography>

      <div onClick={handleClick} className={styles.inner} title={t('title')}>
        <Settings className={styles.icon} />
      </div>

      <Typography className={styles.text} useHorizontal>
        {t('right')}
      </Typography>
    </div>
  )
}

export default SettingsArticle