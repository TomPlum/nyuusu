import { type ComponentType } from "react"
import { Direction } from "modules/PageTransition/hooks/usePageTranslation/types.ts"

export interface TransitionablePageProps {
    animate?: boolean
    xTranslate?: number
    yTranslate?: number
}

export interface PageTransitionProps {
    hasNavigated: boolean
    className?: string
    direction: Direction
    targetPage: ComponentType<TransitionablePageProps>
}