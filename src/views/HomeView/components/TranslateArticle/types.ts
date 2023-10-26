import { Language } from "modules/Settings/components/LanguageSelector/types.ts"

export interface TranslateArticleProps {
    currentLanguage?: Language
    translationText: (string | undefined)[]
    onTranslate?: (translated: string[]) => void
}