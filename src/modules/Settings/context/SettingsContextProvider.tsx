import { PropsWithChildren, useMemo, useState } from "react"
import { SettingsContextBag } from "modules/Settings/context/types.ts"
import { SettingsContext } from "modules/Settings/context/SettingsContext.ts"

const SettingsContextProvider = ({ children }: PropsWithChildren) => {
  const [open, setOpen] = useState(false)

  const values: SettingsContextBag = useMemo(() => ({
    open,
    setOpen
  }), [open])

  return (
    <SettingsContext.Provider value={values}>
      {children}
    </SettingsContext.Provider>
  )
}

export default SettingsContextProvider