import { GradeLabelsResponse } from "modules/Analysis/hooks/useGradeLabels/types.ts"
import { useTranslation } from "react-i18next"

const useGradeLabels = (): GradeLabelsResponse => {
  const { t } = useTranslation('translation', { keyPrefix: 'views.home.articles.analysis' })
  const barChartLabels: string[] = t('bar.labels', { returnObjects: true })

  return {
    labels: barChartLabels
  }
}

export default useGradeLabels