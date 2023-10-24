import { useCallback, useEffect, useState } from "react"
import { ChartData } from "chart.js"
import { TableData } from "views/HomeView/components/AnalysisArticle/types.ts"
import { DifficultyRating } from "modules/Article/hooks/useLanguageStats/types.ts"
import { AnalysisStubResponse } from "views/HomeView/hooks/useAnalysisStub/types.ts"
import { useTranslation } from "react-i18next"

const useAnalysisStub = (): AnalysisStubResponse => {
  const [pieData, setPieData] = useState<ChartData<'pie'>>()
  const [barData, setBarData] = useState<ChartData<'bar'>>()
  const [tableData, setTableData] = useState<TableData>()
  const [difficulty, setDifficulty] = useState<DifficultyRating>()
  const [animationDuration, setAnimationDuration] = useState(0)
  const { t } = useTranslation('translation', { keyPrefix: 'views.home.articles.analysis' })

  const getRandomInt = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  const generateDifficulty = useCallback((kanji: number) => {
    if (kanji > 48) {
      return DifficultyRating.EXPERT
    } else if (kanji > 23) {
      return DifficultyRating.INTERMEDIATE
    }

    return DifficultyRating.BEGINNER
  }, [])

  const generateData = useCallback(() => {
    const kanji = getRandomInt(10, 60)
    const hiragana = getRandomInt(10, 90 - kanji)
    const katakana = getRandomInt(5, 90 - kanji - hiragana)
    const roman = 100 - kanji - hiragana - katakana

    setTableData({
      length: getRandomInt(102, 267),
      hiragana,
      kanji,
      katakana,
      roman
    })

    const barChartLabels: string[] = t('bar.labels', { returnObjects: true })

    setDifficulty(generateDifficulty(kanji))

    setBarData({
      labels: barChartLabels,
      datasets: [
        {
          data: [
            getRandomInt(1, 7), getRandomInt(1, 8),
            getRandomInt(1, 10), getRandomInt(0, 7),
            getRandomInt(1, 3), getRandomInt(0, 6),
            getRandomInt(1, 5), getRandomInt(1, 2),
            getRandomInt(0, 4), getRandomInt(0, 3)
          ],
          backgroundColor: Array(10).fill('').map((_v, i) => `rgb(249,247,241,${1 - (i / 20)})`)
        }
      ]
    })

    setPieData({
      labels: ['字', 'ひ', 'カ', 'A'],
      datasets: [
        {
          data: [kanji, hiragana, kanji, roman],
          backgroundColor: Array(4).fill('').map((_v, i) => `rgb(46,46,46,${1 - (i * 0.2)})`),
          hoverBackgroundColor: Array(4).fill('').map((_v, i) => `rgb(46,46,46,${0.9 - (i * 0.2)})`)
        }
      ]
    })
  }, [generateDifficulty, t])

  useEffect(() => {
    generateData()
    const interval = setInterval(generateData, 3500)
    setTimeout(() => {
      setAnimationDuration(2000)
    }, 3000)

    return () => {
      clearInterval(interval)
    }
  }, [generateData])

  return {
    barData,
    pieData,
    tableData,
    difficulty,
    animationDuration
  }
}

export default useAnalysisStub