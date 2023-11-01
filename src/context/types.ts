import { View } from "modules/Header/components/ViewControls/types.ts"

export interface NewsContextBag {
    shouldLoadPage: boolean
    setShouldLoadPage: (move: boolean) => void
    backgroundTranslation: string
    setBackgroundTranslation: (translation: string) => void
    view: View // TODO: Remove view
    setView: (view: View) => void
    articles: number
    setArticles: (quantity: number) => void
}