import {
  PageTranslationProps,
  PageTranslationResponse,
} from "modules/PageTransition/hooks/usePageTranslation/types.ts"
import Slide from "modules/PageTransition/animations/Slide/Slide.ts"
import PageTurn from "modules/PageTransition/animations/PageTurn/PageTurn.ts"
import { useWindowScroll } from "@uidotdev/usehooks"

const usePageTranslation = ({ direction, animation }: PageTranslationProps): PageTranslationResponse => {
  const [{ x: xScroll, y: yScroll }] = useWindowScroll()

  switch (animation) {
    case "slide": {
      return Slide({ direction, xScroll, yScroll })
    }
    case "page-turn": {
      return PageTurn({ direction, xScroll, yScroll })
    }
  }
}

export default usePageTranslation