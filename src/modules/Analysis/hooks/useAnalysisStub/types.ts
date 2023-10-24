import { ChartData } from "chart.js"
import { TableData } from "views/HomeView/components/AnalysisArticle/types.ts"
import { DifficultyRating } from "modules/Article/hooks/useLanguageStats/types.ts"

export interface AnalysisStubResponse {
    pieData?: ChartData<'pie'>
    barData?: ChartData<'bar'>
    tableData?: TableData
    difficulty?: DifficultyRating
    animationDuration: number
}