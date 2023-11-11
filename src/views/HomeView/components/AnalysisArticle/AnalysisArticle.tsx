import styles from './AnalysisArticle.module.scss'
import { AnalysisArticleProps } from "views/HomeView/components/AnalysisArticle/types.ts"
import classNames from "classnames"
import useAnalysisStub from "modules/Analysis/hooks/useAnalysisStub"
import AnalysisShowcase from "modules/Analysis"

const AnalysisArticle = ({ className }: AnalysisArticleProps) => {
  const { pieData, barData, tableData, difficulty, animationDuration } = useAnalysisStub()

  return (
    <div className={classNames(styles.wrapper, className)}>
      <AnalysisShowcase
        pieData={pieData}
        barData={barData}
        tableData={tableData}
        difficulty={difficulty}
        animationDuration={animationDuration}
      />
    </div>
  )
}

export default AnalysisArticle