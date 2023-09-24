import { createContext } from "react"
import { SettingsContextBag } from "modules/Settings/context/types.ts"

export const SettingsContext = createContext<SettingsContextBag>({
  open: false,
  setOpen: () => {
    console.debug('SettingsContext is not initialised. Tried to invoke setOpen().')
  },
  sources: ['Mainichi']
})