import { RatingArticleProps } from "modules/Newspaper/components/RatingArticle/types.ts"
import styles from './RatingArticle.module.scss'
import useLanguageStats from "modules/Article/hooks/useLanguageStats"
import AnalysisShowcase from "modules/Analysis/components/AnalysisShowcase"
import { ChartData } from "chart.js"
import { useMemo } from "react"
import { TableData } from "views/HomeView/components/AnalysisArticle/types.ts"
import useGradeLabels from "modules/Analysis/hooks/useGradeLabels"
import useChartColours from "modules/Analysis/hooks/useChartColours"

const RatingArticle = ({ text }: RatingArticleProps) => {
  const { labels } = useGradeLabels()
  const { getDarkColours, getDarkHoverColours, getLightColours } = useChartColours()
  const { difficulty, hiragana, kanji, katakana, roman, other, grades } = useLanguageStats({ input: text })

  const pieData: ChartData<'pie'> = useMemo(() => {
    const labels = ['字', 'ひ', 'カ', 'A', '-']

    return {
      labels,
      datasets: [
        {
          data: [kanji, hiragana, katakana, roman, other],
          backgroundColor: getDarkColours(labels.length),
          hoverBackgroundColor: getDarkHoverColours(labels.length)
        }
      ]
    }
  }, [getDarkColours, getDarkHoverColours, hiragana, kanji, katakana, other, roman])

  const tableData: TableData = useMemo(() => ({
    length: text.length,
    katakana,
    roman,
    hiragana,
    kanji
  }), [hiragana, kanji, katakana, roman, text.length])

  const barData: ChartData<'bar'> = useMemo(() => {
    return {
      labels,
      datasets: [
        {
          data: Object.values(grades),
          backgroundColor: getLightColours(10)
        }
      ]
    }
  }, [getLightColours, grades, labels])

  return (
    <div className={styles.article}>
      <AnalysisShowcase
        pieData={pieData}
        barData={barData}
        tableData={tableData}
        difficulty={difficulty}
        animationDuration={2500}
      />
    </div>
  )
}

export default RatingArticle