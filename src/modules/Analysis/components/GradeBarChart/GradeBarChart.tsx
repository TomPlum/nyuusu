import styles from "./GradeBarChart.module.scss"
import classNames from "classnames"
import { Bar } from "react-chartjs-2"
import { GradeBarChartProps } from "modules/Analysis/components/GradeBarChart/types.ts"
import { useMemo } from "react"
import { DifficultyRating } from "modules/Article/hooks/useLanguageStats/types.ts"
import { useTranslation } from "react-i18next"
import { School } from "@mui/icons-material"

const GradeBarChart = ({ data, animationDuration, difficulty }: GradeBarChartProps) => {
  const { t } = useTranslation('translation', { keyPrefix: 'views.home.articles.analysis' })
    
  const difficultyClass = useMemo(() => {
    switch (difficulty) {
      case DifficultyRating.BEGINNER: return styles.beginner
      case DifficultyRating.INTERMEDIATE: return styles.intermediate
      case DifficultyRating.EXPERT: return styles.expert
    }
  }, [difficulty])
    
  return (
    <div className={styles.barWrapper}>
      <div className={styles.barContainer}>
        <span className={classNames(styles.difficulty, difficultyClass)}>
          {t(`difficulty.${difficulty?.toLowerCase()}`)}
        </span>
        {data && (
          <Bar
            id='grade-bar'
            data={data}
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
  )
}

export default GradeBarChart