export type AnalysisMode = 'headline-only' | 'article-only' | 'headline-and-article'

export interface AnalysisControlsProps {
    onChangeMode: (mode: AnalysisMode) => void
}