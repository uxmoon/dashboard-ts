import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  TooltipProps,
} from 'recharts'
import {
  ValueType,
  NameType,
} from 'recharts/types/component/DefaultTooltipContent'
import { StyledTooltip } from './styles'
import { data } from './data'

const CustomTooltip = ({ label }: TooltipProps<ValueType, NameType>) => {
  return (
    <StyledTooltip>
      <p className='label'>{label} new followers</p>
    </StyledTooltip>
  )
}

const Chart = () => {
  return (
    <ResponsiveContainer width='100%' height={400}>
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 12,
          right: 12,
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
