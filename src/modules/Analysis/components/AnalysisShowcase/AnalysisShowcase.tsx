import GradeBarChart from "modules/Analysis/components/GradeBarChart"
import StatsTable from "modules/Analysis/components/StatsTable"
import CharacterPieChart from "modules/Analysis/components/CharacterPieChart"
import { AnalysisShowcaseProps } from "modules/Analysis/components/AnalysisShowcase/types.ts"
import Typography from "components/Typography"
import styles from './AnalysisShowcase.module.scss'
import { useTranslation } from "react-i18next"

const AnalysisShowcase = ({ barData, pieData, tableData, difficulty, animationDuration }: AnalysisShowcaseProps) => {
  const { t } = useTranslation('translation', { keyPrefix: 'views.home.articles.analysis' })
    
  return (
    <>
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
    </>
  )
}

export default AnalysisShowcase