import { Drawer } from "@mui/material"
import styles from './SettingsDrawer.module.scss'
import { useTranslation } from "react-i18next"
import { useSettingsContext } from "modules/Settings/context/useSettingsContext.ts"
import SourcesSelector from "modules/Settings/components/SourcesSelector"
import LanguageControls from "modules/Settings/components/LanguageControls"
import FontSelector from "modules/Settings/components/FontSelector"
import AnkiDeckSelector from "modules/Settings/components/AnkiDeckSelector"
import AnkiTagsSelector from "modules/Settings/components/AnkiTagsSelector"

const SettingsDrawer = () => {
  const { open, setOpen } = useSettingsContext()
  const { t } = useTranslation('translation', { keyPrefix: 'settings' })

  return (
    <Drawer
      open={open}
      anchor='right'
      variant='temporary'
      disableEnforceFocus
      onClose={() => setOpen(false)}
      classes={{ root: styles.drawer }}
    >
      <div className={styles.content}>
        <h2 className={styles.title}>
          {t('title')}
        </h2>

        <div className={styles.section}>
          <p className={styles.heading}>
            {t('font.heading')}
          </p>

          <FontSelector />
        </div>

        <div className={styles.section}>
          <p className={styles.heading}>
            {t('language')}
          </p>

          <LanguageControls />
        </div>

        <div className={styles.section}>
          <p className={styles.heading}>
            {t('sources')}
          </p>

          <SourcesSelector />
        </div>

        <div className={styles.section}>
          <p className={styles.heading}>
            {t('anki.heading')}
          </p>

          <AnkiDeckSelector />
          <AnkiTagsSelector />
        </div>
      </div>
    </Drawer>
  )
}

export default SettingsDrawer