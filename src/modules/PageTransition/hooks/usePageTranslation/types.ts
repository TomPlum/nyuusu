import { CSSProperties } from "react"

export type Direction =
    'top-left' |
    'top' |
    'top-right' |
    'right' |
    'bottom-right' |
    'bottom' |
    'bottom-left' |
    'left'

export type Animation = 'slide' | 'page-turn'

export interface AnimationProps {
    xScroll: number | null
    yScroll: number | null
    direction: Direction
}

export interface PageTranslationProps {
    animation: Animation
    direction: Direction
}

export interface PageTranslationResponse {
    id: string
    sourcePageTranslation: CSSProperties
    targetPageTranslation: CSSProperties
}