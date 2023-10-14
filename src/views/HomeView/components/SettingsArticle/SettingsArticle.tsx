import { Settings } from '@mui/icons-material'
import styles from './SettingsArticle.module.scss'
import { useSettingsContext } from "modules/Settings/context/useSettingsContext.ts"
import { useCallback } from "react"
import { useTranslation } from "react-i18next"

const SettingsArticle = () => {
  const { open, setOpen } = useSettingsContext()
  const { t } = useTranslation('translation', { keyPrefix: 'views.home.articles.settings' })

  const handleClick = useCallback(() => {
    setOpen(!open)
  }, [open, setOpen])

  return (
    <div className={styles.wrapper}>
      <div className={styles['line-top-1']} />
      <span className={styles.text}>{t('left')}</span>
      <div className={styles['line-top-2']} />

      <div className={styles['line-bottom-1']} />
      <div className={styles['line-bottom-2']} />

      <div onClick={handleClick} className={styles.inner}>
        <Settings className={styles.icon} />
      </div>

      <span className={styles.text}>{t('right')}</span>
    </div>
  )
}

export default SettingsArticle