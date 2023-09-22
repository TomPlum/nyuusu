import { Drawer } from "@mui/material"
import { useSettingsContext } from "modules/Settings/context/useSettingsContext.ts"
import styles from './SettingsDrawer.module.scss'
import { Face } from "@mui/icons-material"

const SettingsDrawer = () => {
  const { open, setOpen } = useSettingsContext()

  return (
    <Drawer
      open={open}
      anchor='right'
      className={styles.drawer}
      onClose={() => setOpen(false)}
    >
      <div className={styles.content}>
        <Face />
      </div>
    </Drawer>
  )
}

export default SettingsDrawer