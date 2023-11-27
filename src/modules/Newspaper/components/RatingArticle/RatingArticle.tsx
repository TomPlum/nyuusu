import { RatingArticleProps } from "modules/Newspaper/components/RatingArticle/types.ts"
import styles from './RatingArticle.module.scss'
import useLanguageStats from "modules/Article/hooks/useLanguageStats"
import AnalysisShowcase from "modules/Analysis"
import { ChartData } from "chart.js"
import { useEffect, useMemo, useState } from "react"
import { TableData } from "views/HomeView/components/AnalysisArticle/types.ts"
import useGradeLabels from "modules/Analysis/hooks/useGradeLabels"
import useChartColours from "modules/Analysis/hooks/useChartColours"

const RatingArticle = ({ headline, articleBody, analysisMode }: RatingArticleProps) => {
  const { labels } = useGradeLabels()
  const [animationDuration, setAnimationDuration] = useState(0)
  const { getDarkColours, getDarkHoverColours, getLightColours } = useChartColours()

  const textToAnalyse: string = useMemo(() => {
    switch (analysisMode) {
      case 'headline-and-article': {
        return headline + (articleBody ?? '')
      }
      case 'article-only': {
        return articleBody ?? ''
      }
      case 'headline-only': {
        return headline
      }
      default: {
        return headline
      }
    }
  }, [analysisMode, articleBody, headline])

  const { difficulty, hiragana, kanji, katakana, roman, other, grades } = useLanguageStats({
    input: textToAnalyse
  })

  useEffect(() => {
    setAnimationDuration(2500)
  }, [])

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
    length: textToAnalyse.length,
    katakana,
    roman,
    hiragana,
    kanji
  }), [hiragana, kanji, katakana, roman, textToAnalyse.length])

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
        animationDuration={animationDuration}
      />
    </div>
  )
}

export default RatingArticle