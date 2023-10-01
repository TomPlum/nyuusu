import { PropsWithChildren, useMemo, useState } from "react"
import {
  defaultAnkiSettings,
  defaultSettings,
  NewsSource,
  SettingsContextBag,
  SettingsValues
} from "modules/Settings/context/types.ts"
import { SettingsContext } from "modules/Settings/context/SettingsContext.ts"
import { Language } from "modules/Settings/components/LanguageControls/types.ts"
import { Font, FONTS } from "modules/Settings/components/FontSelector/types.ts"
import useLocalStorage from "hooks/useLocalStorage"

const SettingsContextProvider = ({ children }: PropsWithChildren) => {
  const [open, setOpen] = useState(false)
  const [font, setFont] = useState<Font>(FONTS[0])
  const [anki, setAnki] = useState(defaultAnkiSettings)
  const [language, setLanguage] = useState<Language>('jp')
  const [sources, setSources] = useState<NewsSource[]>([NewsSource.MAINICHI_RSS_FLASH_NEWS])

  const { value: settings } = useLocalStorage<SettingsValues>({
    key: 'settings',
    defaultValue: defaultSettings,
    value: {
      anki,
      font,
      language,
      sources
    }
  })

  const values: SettingsContextBag = useMemo(() => ({
    ...settings,
    open,
    setOpen,
    setSources,
    setLanguage,
    setFont,
    setAnkiSettings: setAnki
  }), [open, settings])

  return (
    <SettingsContext.Provider value={values}>
      {children}
    </SettingsContext.Provider>
  )
}

export default SettingsContextProvider