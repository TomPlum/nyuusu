import { NewsContext } from "context/NewsContext.ts"
import { PropsWithChildren, useMemo, useState } from "react"
import { NewsContextBag } from "context/types.ts"
import { View } from "modules/Header/components/ViewControls/types.ts"

const NewsContextProvider = ({ children }: PropsWithChildren) => {
  const [view, setView] = useState(View.CARDS)
  const [articles, setArticles] = useState(0)

  const values: NewsContextBag = useMemo(() => ({
    view,
    setView,
    articles,
    setArticles
  }), [articles, view])

  return (
    <NewsContext.Provider value={values}>
      {children}
    </NewsContext.Provider>
  )
}

export default NewsContextProvider