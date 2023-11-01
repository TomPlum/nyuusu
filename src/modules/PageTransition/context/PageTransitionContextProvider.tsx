import { PropsWithChildren, useMemo, useState } from "react"
import { PageTransitionBag } from "modules/PageTransition/context/types.ts"
import { PageTransitionContext } from "modules/PageTransition/context/PageTransitionContext.ts"

const PageTransitionContextProvider = ({ children }: PropsWithChildren) => {
  const [shouldLoadPage, setShouldLoadPage] = useState(false)
  const [backgroundTranslation, setBackgroundTranslation] = useState('0% 0%')

  const values: PageTransitionBag = useMemo(() => ({
    shouldLoadPage,
    setShouldLoadPage,
    backgroundTranslation,
    setBackgroundTranslation
  }), [backgroundTranslation, shouldLoadPage])

  return (
    <PageTransitionContext.Provider value={values}>
      {children}
    </PageTransitionContext.Provider>
  )
}

export default PageTransitionContextProvider