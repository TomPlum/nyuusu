import styles from './AnalysisArticle.module.scss'
import { AnalysisArticleProps } from "views/HomeView/components/AnalysisArticle/types.ts"
import classNames from "classnames"
import { useMemo } from "react"
import { Chart as ChartJS, ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, TooltipItem } from 'chart.js'
import ChartDataLabels, { Context } from 'chartjs-plugin-datalabels'
import { Bar, Pie } from 'react-chartjs-2'
import { useTranslation } from "react-i18next"
import Typography from "components/Typography"
import { Equalizer, School } from "@mui/icons-material"
import AnimatedNumber from "react-animated-numbers"
import { DifficultyRating } from "modules/Article/hooks/useLanguageStats/types.ts"
import useAnalysisStub from "views/HomeView/hooks/useAnalysisStub"

ChartJS.register(ArcElement, BarElement, CategoryScale, LinearScale, ChartDataLabels, Tooltip)

const AnalysisArticle = ({ className }: AnalysisArticleProps) => {
  const { pieData, barData, tableData, difficulty, animationDuration } = useAnalysisStub()
  const { t } = useTranslation('translation', { keyPrefix: 'views.home.articles.analysis' })

  const difficultyClass = useMemo(() => {
    switch (difficulty) {
      case DifficultyRating.BEGINNER: return styles.beginner
      case DifficultyRating.INTERMEDIATE: return styles.intermediate
      case DifficultyRating.EXPERT: return styles.expert
    }
  }, [difficulty])

  return (
    <div className={classNames(styles.wrapper, className)}>
      <div className={styles.barWrapper}>
        <div className={styles.barContainer}>
          <span className={classNames(styles.difficulty, difficultyClass)}>
            {t(`difficulty.${difficulty?.toLowerCase()}`)}
          </span>
          {barData && (
            <Bar
              id='grade-bar'
              data={barData}
              className={styles.bar}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                animation: { duration: animationDuration },
                plugins: {
                  datalabels: {
                    font: {
                      weight: 'bold'
                    },
                    formatter: (value: number) => {
                      return value > 0 ? value : ''
                    }
                  }
                },
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