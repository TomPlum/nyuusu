import { ChartColoursResponse } from "modules/Analysis/hooks/useChartColours/types.ts"
import { useCallback } from "react"

const useChartColours = (): ChartColoursResponse => {
  const getDarkColours = useCallback((values: number) => {
    return Array(values).fill('').map((_v, i) => `rgb(46,46,46,${1 - (i * 0.2)})`)
  }, [])

  const getDarkHoverColours = useCallback((values: number) => {
    return Array(values).fill('').map((_v, i) => `rgb(46,46,46,${0.9 - (i * 0.2)})`)
  }, [])

  const getLightColours = useCallback((values: number) => {
    return Array(values).fill('').map((_v, i) => `rgb(249,247,241,${1 - (i / 20)})`)
  }, [])

  return {
    getDarkColours,
    getDarkHoverColours,
    getLightColours
  }
}

export default useChartColours