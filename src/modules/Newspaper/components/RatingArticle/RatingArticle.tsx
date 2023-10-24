import { RatingArticleProps } from "modules/Newspaper/components/RatingArticle/types.ts"
import styles from './RatingArticle.module.scss'
import useLanguageStats from "modules/Article/hooks/useLanguageStats"
import AnalysisShowcase from "modules/Analysis/components/AnalysisShowcase"
import { ChartData } from "chart.js"
import { useMemo } from "react"
import { TableData } from "views/HomeView/components/AnalysisArticle/types.ts"
import useGradeLabels from "modules/Analysis/hooks/useGradeLabels"

const RatingArticle = ({ text }: RatingArticleProps) => {
  const { labels } = useGradeLabels()
  const { difficulty, hiragana, kanji, katakana, roman, other, grades } = useLanguageStats({ input: text })

  const pieData: ChartData<'pie'> = useMemo(() => ({
    labels: ['字', 'ひ', 'カ', 'A', '-'],
    datasets: [
      {
        data: [kanji, hiragana, katakana, roman, other],
        backgroundColor: Array(5).fill('').map((_v, i) => `rgb(46,46,46,${1 - (i * 0.2)})`),
        hoverBackgroundColor: Array(5).fill('').map((_v, i) => `rgb(46,46,46,${0.9 - (i * 0.2)})`)
      }
    ]
  }), [hiragana, kanji, katakana, other, roman])

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
          backgroundColor: Array(10).fill('').map((_v, i) => `rgb(249,247,241,${1 - (i / 20)})`)
        }
      ]
    }
  }, [grades, labels])

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