import styles from './AnalysisArticle.module.scss'
import { AnalysisArticleProps } from "views/HomeView/components/AnalysisArticle/types.ts"
import classNames from "classnames"
import { Chart as ChartJS, ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, TooltipItem } from 'chart.js'
import ChartDataLabels, { Context } from 'chartjs-plugin-datalabels'
import { Pie } from 'react-chartjs-2'
import { useTranslation } from "react-i18next"
import Typography from "components/Typography"
import { Equalizer } from "@mui/icons-material"
import AnimatedNumber from "react-animated-numbers"
import useAnalysisStub from "views/HomeView/hooks/useAnalysisStub"
import GradeBarChart from "modules/Analysis/components/GradeBarChart"

ChartJS.register(ArcElement, BarElement, CategoryScale, LinearScale, ChartDataLabels, Tooltip)

const AnalysisArticle = ({ className }: AnalysisArticleProps) => {
  const { pieData, barData, tableData, difficulty, animationDuration } = useAnalysisStub()
  const { t } = useTranslation('translation', { keyPrefix: 'views.home.articles.analysis' })

  return (
    <div className={classNames(styles.wrapper, className)}>
      <GradeBarChart
        data={barData}
        difficulty={difficulty} 
        animationDuration={animationDuration}
      />

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