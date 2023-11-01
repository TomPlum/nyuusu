import { createContext } from "react"
import { PageTransitionBag } from "modules/PageTransition/context/types.ts"

export const PageTransitionContext = createContext<PageTransitionBag>({
  shouldLoadPage: false,
  setShouldLoadPage: (move: boolean) => {
    console.debug(`NewsContext not initialized. Tried to invoke setShouldLoadPage(move: ${move}).`)
  },
  backgroundTranslation: '0% 0%',
  setBackgroundTranslation: (translation: string) => {
    console.debug(`NewsContext not initialized. Tried to invoke setBackgroundTranslation(translation: ${translation}).`)
  }
})
