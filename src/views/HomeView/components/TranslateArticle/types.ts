import { Language } from "modules/Settings/components/LanguageSelector/types.ts"

export interface TranslateArticleProps {
    onTranslate?: () => void
    currentLanguage: Language
}