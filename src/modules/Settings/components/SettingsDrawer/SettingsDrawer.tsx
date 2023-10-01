import { Drawer } from "@mui/material"
import styles from './SettingsDrawer.module.scss'
import { useTranslation } from "react-i18next"
import { useSettingsContext } from "modules/Settings/context/useSettingsContext.ts"
import SourcesSelector from "modules/Settings/components/SourcesSelector"
import LanguageSelector from "modules/Settings/components/LanguageSelector"
import FontSelector from "modules/Settings/components/FontSelector"
import AnkiDeckSelector from "modules/Settings/components/AnkiDeckSelector"
import AnkiTagsSelector from "modules/Settings/components/AnkiTagsSelector"
import { useCallback } from "react"
import { defaultAnkiSettings } from "modules/Settings/context/types.ts"
import SettingsSection from "modules/Settings/components/SettingsSection"

const SettingsDrawer = () => {
  const { open, setOpen, setAnkiSettings } = useSettingsContext()
  const { t } = useTranslation('translation', { keyPrefix: 'settings' })

  const resetAnkiSettings = useCallback(() => {
    setAnkiSettings(defaultAnkiSettings)
  }, [setAnkiSettings])

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

        <SettingsSection title={t('font.heading')}>
          <FontSelector />
        </SettingsSection>

        <SettingsSection title={t('language')}>
          <LanguageSelector />
        </SettingsSection>

        <SettingsSection title={t('sources')}>
          <SourcesSelector />
        </SettingsSection>

        <SettingsSection title={t('anki.heading')} onReset={resetAnkiSettings}>
          <AnkiDeckSelector />
          <AnkiTagsSelector />
        </SettingsSection>
      </div>
    </Drawer>
  )
}

export default SettingsDrawer