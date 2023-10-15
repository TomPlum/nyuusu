import styles from './AnalysisArticle.module.scss'
import { AnalysisArticleProps } from "views/HomeView/components/AnalysisArticle/types.ts"
import classNames from "classnames"
import { useCallback, useEffect, useMemo, useState } from "react"
import { Chart as ChartJS, ArcElement, ChartData } from 'chart.js'
import ChartDataLabels, { Context } from 'chartjs-plugin-datalabels'
import { Pie } from 'react-chartjs-2'
import { useTranslation } from "react-i18next"
import Typography from "components/Typography"
import useLanguageStats from "modules/Article/hooks/useLanguageStats"
import { DifficultyRating } from "modules/Article/hooks/useLanguageStats/types.ts"
import { Equalizer } from "@mui/icons-material"

ChartJS.register(ArcElement, ChartDataLabels)

const AnalysisArticle = ({ className }: AnalysisArticleProps) => {
  const [data, setData] = useState<ChartData<'pie'>>()
  const { difficulty } = useLanguageStats({ input: 'text' })
  const [animationDuration, setAnimationDuration] = useState(0)
  const { t } = useTranslation('translation', { keyPrefix: 'views.home.articles.analysis' })

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const difficultyClass = useMemo(() => {
    switch (difficulty) {
      case DifficultyRating.BEGINNER: return styles.beginner
      case DifficultyRating.INTERMEDIATE: return styles.intermediate
      case DifficultyRating.EXPERT: return styles.expert
    }
  }, [difficulty])

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
    setTimeout(() => {
      setAnimationDuration(2000)
    }, 3000)
    
    return () => {
      clearInterval(interval)
    }
  }, [generateData])

  return (
    <div className={classNames(styles.wrapper, className)}>
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
            {data && (
              <Pie
                data={data}
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