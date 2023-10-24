import { ChartData } from "chart.js"

export interface CharacterPieChartProps {
    data?: ChartData<'pie'>
    animationDuration: number
}