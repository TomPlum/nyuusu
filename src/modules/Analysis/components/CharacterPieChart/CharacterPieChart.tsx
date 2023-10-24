import styles from "./CharacterPieChart.module.scss"
import { Pie } from "react-chartjs-2"
import ChartDataLabels, { Context } from "chartjs-plugin-datalabels"
import { TooltipItem } from "chart.js"
import { CharacterPieChartProps } from "modules/Analysis/components/CharacterPieChart/types.ts"

const CharacterPieChart = ({ data, animationDuration }: CharacterPieChartProps) => {
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
  )
}

export default CharacterPieChart