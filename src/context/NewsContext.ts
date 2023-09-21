import { createContext } from "react"
import { NewsContextBag } from "context/types.ts"
import { View } from "components/ViewControls/types.ts"

export const NewsContext = createContext<NewsContextBag>({
    view: View.CARDS,
    setView: () => {
        console.debug('NewsContext not initialized. Tried to invoke setView().')
    },
    language: 'jp',
    setLanguage: () => {
        console.debug('NewsContext not initialized. Tried to invoke setLanguage().')
    }
})