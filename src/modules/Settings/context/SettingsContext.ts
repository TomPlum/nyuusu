import { createContext } from "react"
import { NewsSource, SettingsContextBag } from "modules/Settings/context/types.ts"
import { FONTS } from "modules/Settings/components/FontSelector/types.ts"

export const SettingsContext = createContext<SettingsContextBag>({
  open: false,
  setOpen: () => {
    console.debug('SettingsContext is not initialised. Tried to invoke setOpen().')
  },
  sources: [NewsSource.MAINICHI_RSS_FLASH_NEWS],
  setSources: () => {
    console.debug('SettingsContext is not initialised. Tried to invoke setSources().')
  },
  language: 'jp',
  setLanguage: () => {
    console.debug('NewsContext not initialized. Tried to invoke setLanguage().')
  },
  font: FONTS[0],
  setFont: () => {
    console.debug('NewsContext not initialized. Tried to invoke setFont().')
  }
})