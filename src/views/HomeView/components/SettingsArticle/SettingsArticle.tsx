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
      <div className={styles.test} />
      <div className={styles.lineOuter}>
        <div className={styles.lineInner} />
      </div>

      <span className={styles.text}>{t('left')}</span>

      <div onClick={handleClick} className={styles.inner} title={t('title')}>
        <Settings className={styles.icon} />
      </div>

      <span className={styles.text}>{t('right')}</span>
    </div>
  )
}

export default SettingsArticle