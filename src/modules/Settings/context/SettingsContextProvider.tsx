import { PropsWithChildren, useMemo, useState } from "react"
import { NewsSource, SettingsContextBag } from "modules/Settings/context/types.ts"
import { SettingsContext } from "modules/Settings/context/SettingsContext.ts"

const SettingsContextProvider = ({ children }: PropsWithChildren) => {
  const [open, setOpen] = useState(false)
  const [sources, setSources] = useState<NewsSource[]>([NewsSource.MAINICHI_RSS_FLASH_NEWS])

  const values: SettingsContextBag = useMemo(() => ({
    open,
    setOpen,
    sources,
    setSources
  }), [open, sources])

  return (
    <SettingsContext.Provider value={values}>
      {children}
    </SettingsContext.Provider>
  )
}

export default SettingsContextProvider