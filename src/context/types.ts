import { View } from "modules/Header/components/ViewControls/types.ts"

export interface NewsContextBag {
    view: View // TODO: Remove view
    setView: (view: View) => void
    articles: number
    setArticles: (quantity: number) => void
}