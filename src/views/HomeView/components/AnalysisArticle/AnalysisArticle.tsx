import styles from './AnalysisArticle.module.scss'
import { AnalysisArticleProps, TableData } from "views/HomeView/components/AnalysisArticle/types.ts"
import classNames from "classnames"
import { useCallback, useEffect, useState } from "react"
import { Chart as ChartJS, ArcElement, ChartData, BarElement, CategoryScale, LinearScale, Tooltip, TooltipItem } from 'chart.js'
import ChartDataLabels, { Context } from 'chartjs-plugin-datalabels'
import { Bar, Pie } from 'react-chartjs-2'
import { useTranslation } from "react-i18next"
import Typography from "components/Typography"
import { Equalizer, School } from "@mui/icons-material"
import AnimatedNumber from "react-animated-numbers"

ChartJS.register(ArcElement, BarElement, CategoryScale, LinearScale, ChartDataLabels, Tooltip)

const AnalysisArticle = ({ className }: AnalysisArticleProps) => {
  const [pieData, setPieData] = useState<ChartData<'pie'>>()
  const [barData, setBarData] = useState<ChartData<'bar'>>()
  const [tableData, setTableData] = useState<TableData>()
  const [animationDuration, setAnimationDuration] = useState(0)

  const { t } = useTranslation('translation', { keyPrefix: 'views.home.articles.analysis' })
  const barChartLabels: string[] = t('bar.labels', { returnObjects: true })

  const getRandomInt = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

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
        <div className={styles.barContainer}>
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
                  x: {
                    ticks: {
                      color: '#f9f7f1',
                      font: {
                        weight: 'bold'
                      }
                    }
                  },
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
        </div>

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
          <span>{t('text.start.prefix')}</span>
          <AnimatedNumber
            animateToNumber={tableData?.length ?? 0}
            configs={[{ mass: 1, tension: 220, friction: 47 }]}
          />
          <span>{t('text.start.suffix')}</span>
        </div>

        <div className={styles.stat}>
          <p className={styles.label}>字</p>
          <div className={styles.text}>
            <span>{t('text.kanji.prefix')}</span>
            <AnimatedNumber
              configs={[{}]}
              animateToNumber={tableData?.kanji ?? 0}
            />
            <span>{t('text.kanji.suffix')}</span>
          </div>
        </div>

        <div className={styles.stat}>
          <p className={styles.label}>ひ</p>
          <div className={styles.text}>
            <AnimatedNumber
              animateToNumber={tableData?.hiragana ?? 0}
              configs={[{ mass: 1, tension: 220, friction: 35 }]}
            />
            <span>{t('text.hiragana.suffix')}</span>
          </div>
        </div>

        <div className={styles.stat}>
          <p className={styles.label}>カ</p>
          <div className={styles.text}>
            <span>{t('text.katakana.prefix')}</span>
            <AnimatedNumber
              animateToNumber={tableData?.katakana ?? 0}
              configs={[{ mass: 1, tension: 220, friction: 25 }]}
            />
            <span>{t('text.katakana.suffix')}</span>
          </div>
        </div>

        <div className={styles.stat}>
          <p className={styles.label}>A</p>
          <div className={styles.text}>
            <AnimatedNumber
              animateToNumber={tableData?.roman ?? 0}
              configs={[{ mass: 1, tension: 220, friction: 45 }]}
            />
            <span>{t('text.roman.suffix')}</span>
          </div>
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
                    tooltip: {
                      enabled: true,
                      yAlign: 'bottom',
                      usePointStyle: true,
                      bodyAlign: 'center',
                      bodyFont: {
                        weight: 'bold'
                      },
                      titleFont: {
                        weight: 'bold'
                      },
                      callbacks: {
                        title: (tooltipItems: TooltipItem<"pie">[]) => {
                          switch (tooltipItems[0].label) {
                            case 'A': return 'Roman'
                            case '字': return 'Kanji'
                            case 'ひ': return 'Hiragana'
                            case 'カ': return 'Katakana'
                          }
                        },
                        label: (tooltipItem: TooltipItem<"pie">) => {
                          return ` ${tooltipItem.raw as string}%`
                        }
                      }
                    },
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