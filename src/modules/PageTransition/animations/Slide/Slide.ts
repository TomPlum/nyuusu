import { CSSProperties } from "react"
import {
  AnimationProps,
  Direction,
  PageTranslationResponse
} from "modules/PageTransition/hooks/usePageTranslation/types.ts"

const Slide = ({ direction, xScroll, yScroll }: AnimationProps): PageTranslationResponse => {

  const calculateTranslation = (direction: Direction) => {
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
  }

  const calculateOppositeTranslation = (direction: Direction) => {
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
  }

  const sourcePageTranslation = () => {
    const [x, y] = calculateTranslation(direction)

    return {
      "--translate": `${x}% ${y}%`
    } as CSSProperties
  }

  const targetPageTranslation = () => {
    const [x, y] = calculateOppositeTranslation(direction)

    const yHeaderOffset = 64 // <-- Height of the header
    const yOffset = yHeaderOffset + (yScroll ?? 0) // <-- Account for page scroll-y
    const xOffsetMagicNumber = 8 // <-- Why? Good question.
    const xOffset = xOffsetMagicNumber + (xScroll ?? 0) // <-- Account for page scroll-x

    const xTranslation = `calc(${x}% + ${xOffset}px)`
    const yTranslation = `calc(${y}% + ${yOffset}px)`

    return {
      "--targetTranslate": `${xTranslation} ${yTranslation}`,
    } as CSSProperties
  }

  return {
    id: 'slide',
    sourcePageTranslation: sourcePageTranslation(),
    targetPageTranslation: targetPageTranslation()
  }
}

export default Slide