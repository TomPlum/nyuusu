import styles from './AnalysisArticle.module.scss'
import { AnalysisArticleProps } from "views/HomeView/components/AnalysisArticle/types.ts"
import classNames from "classnames"
import { useCallback, useEffect, useState } from "react"
import { Chart as ChartJS, ArcElement, ChartData, BarElement, CategoryScale, LinearScale } from 'chart.js'
import ChartDataLabels, { Context } from 'chartjs-plugin-datalabels'
import { Bar, Pie } from 'react-chartjs-2'
import { useTranslation } from "react-i18next"
import Typography from "components/Typography"
import { Equalizer, School } from "@mui/icons-material"

ChartJS.register(ArcElement, BarElement, CategoryScale, LinearScale, ChartDataLabels)

const AnalysisArticle = ({ className }: AnalysisArticleProps) => {
  const [pieData, setPieData] = useState<ChartData<'pie'>>()
  const [barData, setBarData] = useState<ChartData<'bar'>>()
  const [animationDuration, setAnimationDuration] = useState(0)

  const { t } = useTranslation('translation', { keyPrefix: 'views.home.articles.analysis' })

  const getRandomInt = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  const generateData = useCallback(() => {
    const kanji = getRandomInt(10, 60)
    const hiragana = getRandomInt(10, 90 - kanji)
    const katakana = getRandomInt(5, 90 - kanji - hiragana)
    const roman = 100 - kanji - hiragana - katakana

    setBarData({
      labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
      datasets: [
        {
          data: Array(10).fill(0).map(() => getRandomInt(0, 8)),
          backgroundColor: Array(10).fill('').map((_v, i) => `rgb(46,46,46,${1 - (i / 15)})`).reverse()
        }
      ]
    })

    setPieData({
      labels: ['字', 'ひ', 'カ', 'A'],
      datasets: [
        {
          data: [kanji, hiragana, kanji, roman],
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
    const interval = setInterval(generateData, 3500)
    setTimeout(() => {
      setAnimationDuration(2000)
    }, 3000)
    
    return () => {
      clearInterval(interval)
    }
  }, [generateData])

  return (
    <div className={classNames(styles.wrapper, className)}>
      <div className={styles.barWrapper}>
        {barData && (
          <Bar
            id='grade-bar'
            data={barData}
            className={styles.bar}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              animation: { duration: animationDuration },
              scales: {
                y: {
                  display: false,
                  grid: {
                    display: false
                  }
                }
              }
            }}
          />
        )}

        <div className={styles.barLabel}>
          <School />
          <span>
            {t('bar.label')}
          </span>
        </div>
      </div>

      <div className={styles.stats}>
        <div className={styles.heading}>
          <Equalizer className={styles.icon} />
          <span>{t('text.start', { length: 120 })}</span>
        </div>

        <div className={styles.stat}>
          <p className={styles.label}>字</p>
          <p className={styles.text}>
            <span>{t('text.kanji', { kanji: 30 })}</span>
          </p>
        </div>

        <div className={styles.stat}>
          <p className={styles.label}>ひ</p>
          <p className={styles.text}>
            <span>{t('text.hiragana', { hiragana: 25 })}</span>
          </p>
        </div>

        <div className={styles.stat}>
          <p className={styles.label}>カ</p>
          <p className={styles.text}>
            <span>{t('text.katakana', { katakana: 15 })}</span>
          </p>
        </div>

        <div className={styles.stat}>
          <p className={styles.label}>A</p>
          <p className={styles.text}>
            <span>{t('text.roman', { roman: 10 })}</span>
          </p>
        </div>

        <div className={styles.mask} />
      </div>

      <div className={styles.pieContainer}>
        <div className={styles.outer}>
          <div className={styles.inner}>
            {pieData && (
              <Pie
                id='type-pie'
                data={pieData}
                // @ts-expect-error who knows?
                plugins={[ChartDataLabels]}
                className={styles.pie}
                options={{
                  animation: { duration: animationDuration },
                  maintainAspectRatio: true,
                  plugins: {
                    datalabels: {
                      formatter: (_value: number, context: Context) => {
                        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                        return context?.chart?.data?.labels?.[context.dataIndex] as string
                      },
                      color: 'white',
                      align: 'end',
                      offset: -4,
                      font: () => ({
                        weight: 'bold',
                        size: 15
                      })
                    }
                  }
                }}
              />
            )}
          </div>
        </div>
      </div>

      <div>
        <Typography className={styles.body}>
          {t('body')}
        </Typography>
      </div>
    </div>
  )
}

export default AnalysisArticle