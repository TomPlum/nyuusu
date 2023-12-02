import { Drawer } from "@mui/material"
import styles from './SettingsDrawer.module.scss'
import { useTranslation } from "react-i18next"
import { useSettingsContext } from "modules/Settings/context/useSettingsContext.ts"
import SourcesSelector from "modules/Settings/components/SourcesSelector"
import LanguageSelector from "modules/Settings/components/LanguageSelector"
import FontSelector from "modules/Settings/components/FontSelector"
import AnkiDeckSelector from "modules/Settings/components/AnkiDeckSelector"
import AnkiTagsSelector from "modules/Settings/components/AnkiTagsSelector"
import { CSSProperties, useCallback, useMemo } from "react"
import { defaultAnkiSettings } from "modules/Settings/context/types.ts"
import SettingsSection from "modules/Settings/components/SettingsSection"
import useCurrentRoute from "hooks/useCurrentRoute/useCurrentRoute.ts"
import AnkiInterfaceToggle from "modules/Settings/components/AnkiInterfaceToggle"
import { useWindowSize } from "@uidotdev/usehooks"
import GaussianNoise from "components/GaussianNoise"

const SettingsDrawer = () => {
  const route = useCurrentRoute()
  const { height } = useWindowSize()
  const { open, setOpen, setAnkiSettings, sources } = useSettingsContext()
  const { t } = useTranslation('translation', { keyPrefix: 'settings' })

  const getRandomInt = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  const path = useMemo(() => {
    const step = height === null || height < 600 ? 4 : 2
    const quantity = height == null ? 75 : height > 600 ? 100 : 50

    const values = Array(quantity).fill('').map((_v, i) => {
      const depth = getRandomInt(4, 10)
      return `${depth}px ${(i + 1) * step}%`
    })

    values.unshift('0% 0%') // <-- Top left [2]
    values.unshift('100% 0%') // <-- Top Right [1]
    // Values from above are in the middle here
    values.push('0% 100%') // <-- Bottom left [3]
    values.push('100% 100%') // <-- Bottom Right [4]

    return {
      "--path": values.join(',')
    }
  }, [height]) as CSSProperties

  const resetAnkiSettings = useCallback(() => {
    setAnkiSettings(defaultAnkiSettings)
  }, [setAnkiSettings])

  const isHomeRoute = useMemo(() => {
    return route === '/'
  }, [route])

  return (
    <Drawer
      open={open}
      anchor='right'
      variant='temporary'
      disableEnforceFocus
      onClose={() => setOpen(false)}
      classes={{ root: styles.drawer, paper: styles.paper  }}
    >
      <div className={isHomeRoute ? styles.contentHome : styles.content} style={path}>
        <GaussianNoise />
        
        <h2 className={styles.title}>
          {t('title')}
        </h2>

        <SettingsSection title={t('font.heading')}>
          <FontSelector />
        </SettingsSection>

        <SettingsSection title={t('language')}>
          <LanguageSelector />
        </SettingsSection>

        <SettingsSection
          title={t('sources.heading')}
          error={sources.length === 0 ? t('sources.error') : undefined}
        >
          <SourcesSelector />
        </SettingsSection>

        <SettingsSection
          title={t('anki.heading')}
          onReset={resetAnkiSettings}
          description={<a href='/anki'>{t('anki.desc')}</a>}
        >
          <AnkiDeckSelector />
          <AnkiTagsSelector />
          <AnkiInterfaceToggle />
        </SettingsSection>
      </div>
    </Drawer>
  )
}

export default SettingsDrawer