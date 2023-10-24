export interface ChartColoursResponse {
    getDarkColours: (values: number) => string[]
    getDarkHoverColours: (values: number) => string[]
    getLightColours: (values: number) => string[]
}