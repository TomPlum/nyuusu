import { Language } from "modules/Settings/components/LanguageControls/types.ts"

export interface SettingsContextBag {
    open: boolean
    setOpen: (open: boolean) => void
    sources: NewsSource[]
    setSources: (sources: NewsSource[]) => void
    language: Language
    setLanguage: (language: Language) => void
    font: string
    setFont: (font: string) => void
}

export enum NewsSource {
    MAINICHI_RSS_FLASH_NEWS = 'mainichi-rss-flash-news',
    NEWSCATCHER_API = 'newscatcher-api'
}