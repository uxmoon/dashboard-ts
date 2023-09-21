import { TooltipProps } from 'recharts'
import {
  ValueType,
  NameType,
} from 'recharts/types/component/DefaultTooltipContent'
import { StyledTooltip } from './styles'

const CustomTooltip = ({ label }: TooltipProps<ValueType, NameType>) => {
  return (
    <StyledTooltip>
      <p className='label'>{label} new followers</p>
    </StyledTooltip>
  )
}
export default CustomTooltip
