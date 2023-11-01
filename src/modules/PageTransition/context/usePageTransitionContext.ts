import { useContext } from "react"
import { PageTransitionContext } from "modules/PageTransition/context/PageTransitionContext.ts"

const usePageTransitionContext = () => useContext(PageTransitionContext)

export default usePageTransitionContext