import { SettingsSectionProps } from "modules/Settings/components/SettingsSection/types.ts"
import styles from './SettingsSection.module.scss'
import { PropsWithChildren } from "react"
import { IconButton } from "@mui/material"
import { Restore } from "@mui/icons-material"

const SettingSection = ({ children, title, onReset }: PropsWithChildren<SettingsSectionProps>) => {
  return (
    <div className={styles.section}>
      <p className={styles.heading}>
        {title}

        {onReset && (
          <IconButton onClick={onReset} className={styles.reset}>
            <Restore />
          </IconButton>
        )}
      </p>

      {children}
    </div>
  )
}

export default SettingSection