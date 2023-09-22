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

const Chart = () => {
  return (
    <ResponsiveContainer width='100%' height={220}>
      <LineChart
        height={300}
        data={data}
        margin={{
          top: 12,
          right: 12,
          left: 0,
        }}
      >
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='name' />
        <YAxis interval='preserveStartEnd' />
        <Tooltip cursor={false} content={<CustomTooltip />} />
        <Line
          type='monotone'
          dataKey='followers'
          stroke='#8F8BDA'
          dot={{ stroke: '#8F8BDA', strokeWidth: 2, r: 10 }}
          activeDot={{ stroke: '#8F8BDA', strokeWidth: 2, r: 10 }}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}
export default Chart
