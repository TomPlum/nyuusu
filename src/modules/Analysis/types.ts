import { ChartData } from "chart.js"
import { TableData } from "views/HomeView/components/AnalysisArticle/types.ts"
import { DifficultyRating } from "modules/Article/hooks/useLanguageStats/types.ts"

export interface AnalysisShowcaseProps {
    barData?: ChartData<'bar'>
    pieData?: ChartData<'pie'>
    tableData?: TableData
    difficulty?: DifficultyRating
    animationDuration: number
}