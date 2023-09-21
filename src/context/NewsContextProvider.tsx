import { NewsContext } from "context/NewsContext.ts"
import { PropsWithChildren, useMemo, useState } from "react"
import { NewsContextBag } from "context/types.ts"
import { View } from "modules/Header/components/ViewControls/types.ts"
import { Language } from "modules/Header/components/LanguageControls/types.ts"

const NewsContextProvider = ({ children }: PropsWithChildren) => {
  const [view, setView] = useState(View.SINGLE)
  const [language, setLanguage] = useState<Language>('jp')

  const values: NewsContextBag = useMemo(() => ({
    view,
    language,
    setView,
    setLanguage
  }), [language, view])

  return (
    <NewsContext.Provider value={values}>
      {children}
    </NewsContext.Provider>
  )
}

export default NewsContextProvider