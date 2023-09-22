import { useContext } from "react"
import { SettingsContext } from "modules/Settings/context/SettingsContext.ts"

export const useSettingsContext = () => useContext(SettingsContext)