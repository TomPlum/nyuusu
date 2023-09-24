import { Box, Drawer } from "@mui/material"
import styles from './SettingsDrawer.module.scss'
import { useTranslation } from "react-i18next"
import { SettingsDrawerProps } from "./types.ts"
import { useState } from "react"
import { useSettingsContext } from "modules/Settings/context/useSettingsContext.ts"

const SettingsDrawer = ({ onClose }: SettingsDrawerProps) => {
  const { t } = useTranslation('translation', { keyPrefix: 'settings' })
  const { setOpen } = useSettingsContext()
  const [internalOpen, setInternalOpen] = useState(true)

  return (
    <Box
      width="100%"
      height="100%"
      component="div"
      position="absolute"
      id="drawer-container"
    >
      <Drawer
        open={internalOpen}
        anchor='right'
        variant='temporary'
        onClose={() => setInternalOpen(false)}
        PaperProps={{ style: { position: "absolute" } }}
        slotProps={{ backdrop: { style: { position: "absolute" } } }}
        ModalProps={{
          container: document.getElementById('drawer-container'),
          style: { position: 'absolute' },
          keepMounted: true
        }}
        SlideProps={{ onAnimationEnd: () => setOpen(false) }}
      >
        <div className={styles.content}>
          <h2 className={styles.title}>
            {t('title')}
          </h2>

          <div className={styles.section}>
            <p className={styles.heading}>
              {t('font')}
            </p>
          </div>

          <div className={styles.section}>
            <p className={styles.heading}>
              {t('language')}
            </p>
          </div>

          <div className={styles.section}>
            <p className={styles.heading}>
              {t('sources')}
            </p>
          </div>
        </div>
      </Drawer>
    </Box>
  )
}

export default SettingsDrawer