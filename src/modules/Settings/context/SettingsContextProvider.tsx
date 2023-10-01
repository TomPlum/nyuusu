import { PropsWithChildren, useCallback, useMemo, useState } from "react"
import {
  AnkiSettings,
  defaultSettings,
  NewsSource,
  SettingsContextBag,
} from "modules/Settings/context/types.ts"
import { SettingsContext } from "modules/Settings/context/SettingsContext.ts"
import { Language } from "modules/Settings/components/LanguageSelector/types.ts"
import { Font } from "modules/Settings/components/FontSelector/types.ts"
import { useLocalStorage } from "@uidotdev/usehooks"

const SettingsContextProvider = ({ children }: PropsWithChildren) => {
  const [open, setOpen] = useState(false)
  const [settings, setSettings] = useLocalStorage('nyusu-settings', defaultSettings)

  const setFont = useCallback((font: Font) => {
    setSettings(previous => {
      return {
        ...previous,
        font
      }
    })
  }, [setSettings])

  const setSources = useCallback((sources: NewsSource[]) => {
    setSettings(previous => {
      return {
        ...previous,
        sources
      }
    })
  }, [setSettings])

  const setLanguage = useCallback((language: Language) => {
    setSettings(previous => {
      return {
        ...previous,
        language
      }
    })
  }, [setSettings])

  const setAnkiSettings = useCallback((anki: AnkiSettings) => {
    setSettings(previous => {
      return {
        ...previous,
        anki
      }
    })
  }, [setSettings])

  console.log('settings read from local storage', settings)

  const values: SettingsContextBag = useMemo(() => ({
    ...settings,
    open,
    setOpen,
    setFont,
    setSources,
    setLanguage,
    setAnkiSettings
  }), [open, setAnkiSettings, setFont, setLanguage, setSources, settings])

  return (
    <SettingsContext.Provider value={values}>
      {children}
    </SettingsContext.Provider>
  )
}

export default SettingsContextProvider