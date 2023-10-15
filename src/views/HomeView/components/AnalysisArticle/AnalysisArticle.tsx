import styles from './AnalysisArticle.module.scss'
import { AnalysisArticleProps } from "views/HomeView/components/AnalysisArticle/types.ts"
import classNames from "classnames"
import { useCallback, useEffect, useState } from "react"
import { Chart as ChartJS, ArcElement, ChartData } from 'chart.js'
import ChartDataLabels, { Context } from 'chartjs-plugin-datalabels'
import { Pie } from 'react-chartjs-2'
import { useTranslation } from "react-i18next"
import Typography from "components/Typography"

ChartJS.register(ArcElement, ChartDataLabels)

const AnalysisArticle = ({ className }: AnalysisArticleProps) => {
  const [data, setData] = useState<ChartData<'pie'>>()
  const { t } = useTranslation('translation', { keyPrefix: 'views.home.articles.analysis' })

  const getRandomInt = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  const generateData = useCallback(() => {
    const kanji = getRandomInt(10, 60)
    const hiragana = getRandomInt(10, 90 - kanji)
    const katakana = getRandomInt(5, 90 - kanji - hiragana)
    const roman = 100 - kanji - hiragana - katakana

    setData({
      labels: ['字', 'ひ', 'カ', 'A'],
      datasets: [
        {
          label: 'Test',
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
    
    return () => {
      clearInterval(interval)
    }
  }, [generateData])

  return (
    <div className={classNames(styles.wrapper, className)}>
      <div className={styles.pieContainer}>
        <div className={styles.outer}>
          <div className={styles.inner}>
            {data && (
              <Pie
                data={data}
                plugins={[ChartDataLabels]}
                className={styles.pie}
                options={{
                  animation: { duration: 2000 },
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