export interface PageTransitionBag {
    shouldLoadPage: boolean
    setShouldLoadPage: (move: boolean) => void
    backgroundTranslation: string
    setBackgroundTranslation: (translation: string) => void
}