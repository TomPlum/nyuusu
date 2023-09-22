import { Settings } from "@mui/icons-material"
import styles from './SettingsButton.module.scss'
import { useTranslation } from "react-i18next"
import { useSettingsContext } from "modules/Settings/context/useSettingsContext.ts"
import { useCallback } from "react"
import classNames from "classnames"

const SettingsButton = () => {
  const { open, setOpen } = useSettingsContext()
  const { t } = useTranslation('translation', { keyPrefix: 'header' })

  const handleClick = useCallback(() => {
    setOpen(true)
  }, [setOpen])

  return (
    <div className={styles.button} title={t('settings')} onClick={handleClick}>
      <Settings className={classNames(styles.icon, { [styles.spin]: open })} />
    </div>
  )
}

export default SettingsButton