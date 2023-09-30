import { Language } from "modules/Settings/components/LanguageControls/types.ts"
import { Font } from "modules/Settings/components/FontSelector/types.ts"

export interface SettingsContextBag {
    open: boolean
    setOpen: (open: boolean) => void
    sources: NewsSource[]
    setSources: (sources: NewsSource[]) => void
    language: Language
    setLanguage: (language: Language) => void
    font: Font
    setFont: (font: Font) => void
}

export enum NewsSource {
    MAINICHI_RSS_FLASH_NEWS = 'mainichi-rss-flash-news',
    ASAHI_RSS_HEADLINES = 'asahi-rss-headlines',
    NEWSCATCHER_API = 'newscatcher-api'
}