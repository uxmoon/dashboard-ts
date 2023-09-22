import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import { data } from './data'
import CustomTooltip from './CustomTooltip'
import { useContext } from 'react'
import { ThemeContext } from 'styled-components'

const Chart = () => {
  const themeContext = useContext(ThemeContext)

  return (
    <ResponsiveContainer width='100%' height={220}>
      <LineChart
        height={300}
        data={data}
        margin={{
          top: 12,
          right: 12,
          left: -32,
        }}
      >
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='name' stroke={themeContext?.colors.text} />
        <YAxis interval='preserveStartEnd' stroke={themeContext?.colors.text} />
        <Tooltip cursor={false} content={<CustomTooltip />} />
        <Line
          type='monotone'
          dataKey='followers'
          stroke={themeContext?.colors.chart}
          dot={{ stroke: themeContext?.colors.chart, strokeWidth: 2, r: 8 }}
          activeDot={{
            stroke: themeContext?.colors.chart,
            strokeWidth: 2,
            r: 8,
          }}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}
export default Chart
