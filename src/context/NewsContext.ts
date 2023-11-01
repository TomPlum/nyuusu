import { createContext } from "react"
import { NewsContextBag } from "context/types.ts"
import { View } from "modules/Header/components/ViewControls/types.ts"

export const NewsContext = createContext<NewsContextBag>({
  view: View.CARDS,
  setView: () => {
    console.debug('NewsContext not initialized. Tried to invoke setView().')
  },
  articles: 0,
  setArticles: () => {
    console.debug('NewsContext not initialized. Tried to invoke setArticles().')
  },
  shouldLoadPage: false,
  setShouldLoadPage: (move: boolean) => {
    console.debug(`NewsContext not initialized. Tried to invoke setShouldLoadPage(move: ${move}).`)
  },
  backgroundTranslation: '0% 0%',
  setBackgroundTranslation: (translation: string) => {
    console.debug(`NewsContext not initialized. Tried to invoke setBackgroundTranslation(translation: ${translation}).`)
  }
})