import styles from "./CharacterPieChart.module.scss"
import { Pie } from "react-chartjs-2"
import ChartDataLabels, { Context } from "chartjs-plugin-datalabels"
import { ArcElement, Chart as ChartJS, Tooltip, TooltipItem } from "chart.js"
import { CharacterPieChartProps } from "modules/Analysis/components/CharacterPieChart/types.ts"
import { useTranslation } from "react-i18next"

ChartJS.register(ArcElement, ChartDataLabels, Tooltip)

const CharacterPieChart = ({ data, animationDuration }: CharacterPieChartProps) => {
  const { t } = useTranslation('translation', { keyPrefix: 'views.home.articles.analysis.pie' })
  
  const formatTitle = (tooltipItems: TooltipItem<"pie">[]) => {
    switch (tooltipItems[0].label) {
      case 'A': return t('tooltip.roman')
      case '字': return t('tooltip.kanji')
      case 'ひ': return t('tooltip.hiragana')
      case 'カ': return t('tooltip.katakana')
      case '-': return t('tooltip.other')
    }
  }

  const formatLabel = (tooltipItem: TooltipItem<"pie">) => {
    return ` ${tooltipItem.raw as string}%`
  }

  const formatDataLabel = (value: number, context: Context) => {
    if (value <= 0) {
      return null
    }
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    return context?.chart?.data?.labels?.[context.dataIndex] as string
  }
    
  return (
    <div className={styles.pieContainer}>
      <div className={styles.outer}>
        <div className={styles.inner}>
          {data && (
            <Pie
              id='type-pie'
              data={data}
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
                      title: formatTitle,
                      label: formatLabel
                    }
                  },
                  datalabels: {
                    formatter: formatDataLabel,
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
  )
}

export default CharacterPieChart