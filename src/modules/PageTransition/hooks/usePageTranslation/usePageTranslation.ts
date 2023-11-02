import {
  PageTranslationProps,
  PageTranslationResponse,
  Direction
} from "modules/PageTransition/hooks/usePageTranslation/types.ts"
import { CSSProperties, useCallback, useMemo } from "react"

const usePageTranslation = ({ direction }: PageTranslationProps): PageTranslationResponse => {
  const calculateTranslation = useCallback((direction: Direction) => {
    switch (direction) {
      case "top": return [0, -100]
      case "top-right": return [100, -100]
      case "right": return [100, 0]
      case "bottom-right": return [100, 100]
      case "bottom": return [0, 100]
      case "bottom-left": return [-100, 100]
      case "left": return [-100, 0]
      case "top-left": return [-100, -100]
    }
  }, [])

  const calculateOppositeTranslation = useCallback((direction: Direction) => {
    switch (direction) {
      case "top": return calculateTranslation('bottom')
      case "top-right": return calculateTranslation('bottom-left')
      case "right": return calculateTranslation('left')
      case "bottom-right": return calculateTranslation('top-left')
      case "bottom": return calculateTranslation('top')
      case "bottom-left": return calculateTranslation('top-right')
      case "left": return calculateTranslation('right')
      case "top-left": return calculateTranslation('bottom-right')
    }
  }, [calculateTranslation])

  const sourcePageTranslation = useMemo(() => {
    const [x, y] = calculateTranslation(direction)

    return {
      "--translate": `${x}% ${y}%`
    } as CSSProperties
  }, [calculateTranslation, direction])

  const targetPageTranslation = useMemo(() => {
    const [x, y] = calculateOppositeTranslation(direction)
    const yHeaderOffset = 64 // <-- Height of the header
    const xOffset = 8 // <-- Why? Good question.

    const xTranslation = `calc(${x}% + ${xOffset}px)`
    const yTranslation = `calc(${y}% + ${yHeaderOffset}px)`

    return {
      "--targetTranslate": `${xTranslation} ${yTranslation}`,
    } as CSSProperties
  }, [calculateOppositeTranslation, direction])

  return {
    sourcePageTranslation,
    targetPageTranslation
  }
}

export default usePageTranslation