import { GradeLabelsResponse } from "modules/Analysis/hooks/useGradeLabels/types.ts"
import { useTranslation } from "react-i18next"
import { useMemo } from "react"

const useGradeLabels = (): GradeLabelsResponse => {
  const { t } = useTranslation('translation', { keyPrefix: 'views.home.articles.analysis' })
  const barChartLabels: string[] = useMemo(() => {
    return t('bar.labels', { returnObjects: true })
  }, [t])

  return {
    labels: barChartLabels
  }
}

export default useGradeLabels