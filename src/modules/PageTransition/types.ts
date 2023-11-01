import { type ComponentType } from "react"

export interface TransitionablePageProps {
    animate?: boolean
    xTranslate?: number
    yTranslate?: number
}

export interface PageTransitionProps {
    hasNavigated: boolean
    className?: string
    defaultTranslation: string
    target: {
        component: ComponentType<TransitionablePageProps>
        props: Partial<TransitionablePageProps>
    }
}