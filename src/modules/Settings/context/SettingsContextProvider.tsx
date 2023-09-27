import { PropsWithChildren, useMemo, useState } from "react"
import { NewsSource, SettingsContextBag } from "modules/Settings/context/types.ts"
import { SettingsContext } from "modules/Settings/context/SettingsContext.ts"
import { Language } from "modules/Settings/components/LanguageControls/types.ts"
import { Font, FONTS } from "modules/Settings/components/FontSelector/types.ts"

const SettingsContextProvider = ({ children }: PropsWithChildren) => {
  const [open, setOpen] = useState(false)
  const [font, setFont] = useState<Font>(FONTS[0])
  const [language, setLanguage] = useState<Language>('jp')
  const [sources, setSources] = useState<NewsSource[]>([NewsSource.MAINICHI_RSS_FLASH_NEWS])

  const values: SettingsContextBag = useMemo(() => ({
    open,
    setOpen,
    sources,
    setSources,
    language,
    setLanguage,
    font,
    setFont
  }), [open, sources, language, font])

  return (
    <SettingsContext.Provider value={values}>
      {children}
    </SettingsContext.Provider>
  )
}

export default SettingsContextProvider