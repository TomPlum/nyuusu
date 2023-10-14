import styles from './AnalysisArticle.module.scss'
import { AnalysisArticleProps } from "views/HomeView/components/AnalysisArticle/types.ts"
import classNames from "classnames"
import { useCallback, useEffect, useState } from "react"
import { Chart as ChartJS, ArcElement, ChartData } from 'chart.js'
import { Pie } from 'react-chartjs-2'

ChartJS.register(ArcElement)

const AnalysisArticle = ({ className }: AnalysisArticleProps) => {
  const [data, setData] = useState<ChartData<'pie'>>()

  const getRandomInt = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  const generateData = useCallback(() => {
    const kanji = getRandomInt(10, 60)
    const hiragana = getRandomInt(10, 90 - kanji)
    const katakana = getRandomInt(5, 90 - kanji - hiragana)
    const roman = 100 - kanji - hiragana - katakana

    setData({
      labels: ['Kanji'],
      datasets: [
        {
          label: 'Test',
          data: [kanji, hiragana, kanji, roman].sort((a, b) => b - a),
          backgroundColor: [
            'rgb(46,46,46,1)',
            'rgb(46,46,46,0.9)',
            'rgb(46,46,46,0.7)',
            'rgb(46,46,46,0.6)',
          ]
        }
      ]
    })
  }, [])

  useEffect(() => {
    generateData()
    const interval = setInterval(generateData, 4000)
    
    return () => {
      clearInterval(interval)
    }
  }, [generateData])

  return (
    <div className={classNames(styles.wrapper, className)}>
      <div className={styles.pie}>
        <div className={styles.outer}>
          <div className={styles.inner}>
            {data && (
              <Pie data={data} />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AnalysisArticle