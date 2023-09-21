import { View } from "modules/Header/components/ViewControls/types.ts"
import { Language } from "modules/Header/components/LanguageControls/types.ts"

export interface NewsContextBag {
    view: View
    setView: (view: View) => void
    language: Language
    setLanguage: (language: Language) => void
}