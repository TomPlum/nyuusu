import {
  AnimationProps,
  Direction,
  PageTranslationResponse
} from "modules/PageTransition/hooks/usePageTranslation/types.ts"
import { CSSProperties } from "react"

const PageTurn = ({ direction }: AnimationProps): PageTranslationResponse => {
  const calculateTranslation = (direction: Direction) => {
    switch (direction) {
      case "left": return [-100, 0]
      case "right": return [100, 0]
      case "top":
      case "top-right":
      case "bottom-right":
      case "bottom":
      case "bottom-left":
      case "top-left": {
        console.error(`The page turn transition does not support the ${direction} direction.`)
        return [0, 0]
      }
    }
  }


  const sourcePageTranslation = () => {
    const [x, y] = calculateTranslation(direction)

    return {
      "--translate": `${x}% ${y}%`
    } as CSSProperties
  }

  const targetPageTranslation = () => {
    return {} as CSSProperties // <-- No-op, the target page need not move
  }

  return {
    id: 'page-turn',
    sourcePageTranslation: sourcePageTranslation(),
    targetPageTranslation: targetPageTranslation()
  }
}

export default PageTurn