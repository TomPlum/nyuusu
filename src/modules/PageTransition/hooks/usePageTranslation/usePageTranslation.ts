import {
  PageTranslationProps,
  PageTranslationResponse,
  Position
} from "modules/PageTransition/hooks/usePageTranslation/types.ts"
import { useCallback, useMemo } from "react"

const usePageTranslation = ({ direction }: PageTranslationProps): PageTranslationResponse => {
  const calculateTranslation = useCallback((direction: Position) => {
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

  const calculateOppositeTranslation = useCallback((direction: Position) => {
    switch (direction) {
      case "top":return calculateTranslation('bottom')
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
    const coordinates = calculateTranslation(direction)
    return `${coordinates[0]}% ${coordinates[1]}%`
  }, [calculateTranslation, direction])

  const targetPageTranslation = useMemo(() => {
    const coordinates = calculateOppositeTranslation(direction)
    return {
      x: coordinates[0],
      y: coordinates[1]
    }
  }, [calculateOppositeTranslation, direction])

  return {
    sourcePageTranslation,
    targetPageTranslation: targetPageTranslation
  }
}

export default usePageTranslation