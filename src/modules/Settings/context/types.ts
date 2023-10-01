import { Language } from "modules/Settings/components/LanguageControls/types.ts"
import { Font, FONTS } from "modules/Settings/components/FontSelector/types.ts"

export interface AnkiSettings {
    deckName: string
    tags: string[]
}

export const defaultAnkiSettings: AnkiSettings = {
  deckName: 'Japanese::Nyusu',
  tags: ['nyusu']
}

export interface SettingsContextBag extends SettingsValues {
    open: boolean
    setOpen: (open: boolean) => void
    setSources: (sources: NewsSource[]) => void
    setLanguage: (language: Language) => void
    setFont: (font: Font) => void
    setAnkiSettings: (settings: AnkiSettings) => void
}

export interface SettingsValues {
    sources: NewsSource[]
    language: Language
    font: Font
    anki: AnkiSettings
}

export enum NewsSource {
    MAINICHI_RSS_FLASH_NEWS = 'mainichi-rss-flash-news',
    ASAHI_RSS_HEADLINES = 'asahi-rss-headlines',
    NEWSCATCHER_API = 'newscatcher-api'
}

export const defaultSettings: SettingsValues = {
  sources: [NewsSource.MAINICHI_RSS_FLASH_NEWS],
  anki: defaultAnkiSettings,
  font: FONTS[0],
  language: 'jp'
}