import { AnalysisMode } from "modules/Analysis/components/AnalysisControls/types.ts"

export interface RatingArticleProps {
    headline: string
    articleBody?: string
    analysisMode?: AnalysisMode
}