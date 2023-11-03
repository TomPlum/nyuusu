export interface PageTransitionBag {
    shouldLoadPage: boolean
    setShouldLoadPage: (move: boolean) => void
    animateHeader: boolean
    setTargetHasHeader: (hasHeader: boolean) => void
}