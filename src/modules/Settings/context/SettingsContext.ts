import { createContext } from "react"
import { defaultSettings, SettingsContextBag } from "modules/Settings/context/types.ts"

export const SettingsContext = createContext<SettingsContextBag>({
  ...defaultSettings,
  open: false,
  setOpen: () => {
    console.debug('SettingsContext is not initialised. Tried to invoke setOpen().')
  },
  setSources: () => {
    console.debug('SettingsContext is not initialised. Tried to invoke setSources().')
  },
  setLanguage: () => {
    console.debug('SettingsContext not initialized. Tried to invoke setLanguage().')
  },
  setFont: () => {
    console.debug('SettingsContext not initialized. Tried to invoke setFont().')
  },
  setAnkiSettings: () => {
    console.debug('SettingsContext not initialized. Tried to invoke setAnkiSettings().')
  }
})