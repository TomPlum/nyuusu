export type Position =
    'top-left' |
    'top' |
    'top-right' |
    'right' |
    'bottom-right' |
    'bottom' |
    'bottom-left' |
    'left'

export interface PageTranslationProps {
    direction: Position
}

export interface PageTranslationResponse {
    sourcePageTranslation: string
    targetPageTranslation: {
        x: number
        y: number
    }
}