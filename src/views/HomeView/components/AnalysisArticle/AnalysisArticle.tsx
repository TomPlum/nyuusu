import styles from './AnalysisArticle.module.scss'
import { AnalysisArticleProps } from "views/HomeView/components/AnalysisArticle/types.ts"
import classNames from "classnames"
import { Chart as ChartJS, ArcElement, BarElement, CategoryScale, LinearScale, Tooltip } from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels'
import { useTranslation } from "react-i18next"
import Typography from "components/Typography"
import useAnalysisStub from "views/HomeView/hooks/useAnalysisStub"
import GradeBarChart from "modules/Analysis/components/GradeBarChart"
import StatsTable from "modules/Analysis/components/StatsTable"
import CharacterPieChart from "modules/Analysis/components/CharacterPieChart"

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

      <StatsTable
        data={tableData}
      />

      <CharacterPieChart
        data={pieData}
        animationDuration={animationDuration}
      />

      <Typography className={styles.body}>
        {t('body')}
      </Typography>
    </div>
  )
}

export default AnalysisArticle