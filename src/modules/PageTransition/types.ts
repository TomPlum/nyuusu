import { type ComponentType } from "react"
import { Animation, Direction } from "modules/PageTransition/hooks/usePageTranslation/types.ts"

export interface AnimationProps {
    direction?: Direction
    animation?: Animation
}

export interface PageTransitionProps extends AnimationProps {
    hasNavigated: boolean
    className?: string
    targetPage?: ComponentType
    targetHasHeader?: boolean
}