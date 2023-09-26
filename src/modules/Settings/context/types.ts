export interface SettingsContextBag {
    open: boolean
    setOpen: (open: boolean) => void
    sources: NewsSource[]
    setSources: (sources: NewsSource[]) => void
}

export enum NewsSource {
    MAINICHI_RSS_FLASH_NEWS = '毎日新聞社',
    NEWSCATCHER_API = 'Newscatcher API'
}