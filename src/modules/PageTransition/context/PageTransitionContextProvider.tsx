import { PropsWithChildren, useMemo, useState } from "react"
import { PageTransitionBag } from "modules/PageTransition/context/types.ts"
import { PageTransitionContext } from "modules/PageTransition/context/PageTransitionContext.ts"

const PageTransitionContextProvider = ({ children }: PropsWithChildren) => {
  const [shouldLoadPage, setShouldLoadPage] = useState(false)
  const [targetHasHeader, setTargetHasHeader] = useState(false)

  const values: PageTransitionBag = useMemo(() => ({
    shouldLoadPage,
    setShouldLoadPage,
    animateHeader: targetHasHeader,
    setTargetHasHeader
  }), [shouldLoadPage, targetHasHeader])

  return (
    <PageTransitionContext.Provider value={values}>
      {children}
    </PageTransitionContext.Provider>
  )
}

export default PageTransitionContextProvider