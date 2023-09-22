import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts"
import { CustomLabelArgs, LanguageChartProps } from "modules/Newspaper/components/LanguageChart/types.ts"
import useLanguageStats from "modules/Article/hooks/useLanguageStats"
import { useCallback, useMemo } from "react"
import styles from './LanguageChart.module.scss'

const LanguageChart = ({ text }: LanguageChartProps) => {
  const { kanji, roman, katakana, hiragana, other } = useLanguageStats({ input: text })

  const data = useMemo(() => ([
    { name: 'Kanji', value: kanji, fill: '#2e2e2e', label: '字' },
    { name: 'Roman', value: roman, fill: '#2e2e2e', label: 'A' },
    { name: 'Katakana', value: katakana, fill: '#2e2e2e', label: 'カ' },
    { name: 'Hiragana', value: hiragana, fill: '#2e2e2e', label: 'ひ' },
    { name: 'Other', value: other, fill: '#2e2e2e', label: '~' },
  ]), [hiragana, kanji, katakana, other, roman])

  const renderLabel = useCallback(
    ({
      cx, cy, midAngle, innerRadius, outerRadius, index
    }: CustomLabelArgs) => {
      const radian = Math.PI / 180
      const radius = innerRadius + (outerRadius - innerRadius) * 0.7
      const x = cx + radius * Math.cos(-midAngle * radian)
      const y = cy + radius * Math.sin(-midAngle * radian)

      return (
        <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central" className={styles.label}>
          {data[index].label}
        </text>
      )
    }, [data])

  return (
    <ResponsiveContainer className={styles.container} height='100%' width='100%'>
      <PieChart width={160} height={100} data-testid='language-chart' className={styles.pieChart} margin={{ top: 75 }}>
        <Pie
          cx="50%"
          cy="50%"
          data={data}
          endAngle={0}
          nameKey='name'
          dataKey="value"
          startAngle={180}
          outerRadius={80}
          labelLine={false}
          label={renderLabel}
          className={styles.pie}
          isAnimationActive={false}
        >
          {data.map((datum, i) => {
            return (
              <Cell
                key={`cell-${datum.name}`}
                fill={`rgba(46, 46, 46, ${1 - (i / 10)})`}
              />
            )
          })}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  )
}

export default LanguageChart