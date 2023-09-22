import { ReactNode } from 'react'
import { StatsArrow, StatsContainer } from './styles'

interface Props {
  children: ReactNode
  isDecrease?: boolean
}

const Stats = ({ children, isDecrease }: Props) => {
  return (
    <StatsContainer $decrease={isDecrease}>
      <StatsArrow
        src={`img/icon-${isDecrease ? 'down' : 'up'}.svg`}
        alt={isDecrease ? 'Decrease' : 'Increase'}
      />{' '}
      {children}
    </StatsContainer>
  )
}
export default Stats
