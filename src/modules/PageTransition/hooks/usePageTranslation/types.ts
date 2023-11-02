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

export interface PageTranslationProps {
    direction: Direction
}

export interface PageTranslationResponse {
    sourcePageTranslation: CSSProperties
    targetPageTranslation: CSSProperties
}