import { DifficultyRating } from "modules/Article/hooks/useLanguageStats/types.ts"
import { ChartData } from "chart.js"

export interface GradeBarChartProps {
    data?: ChartData<'bar'>
    difficulty?: DifficultyRating
    animationDuration: number
}