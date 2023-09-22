import { ReactNode } from 'react'
import { StatsContainer } from './styles'
import Arrow from './Arrow'

interface Props {
  children: ReactNode
  isDecrease?: boolean
}

const Stats = ({ children, isDecrease }: Props) => {
  return (
    <StatsContainer $decrease={isDecrease}>
      <Arrow isDecrease={isDecrease} /> {children}
    </StatsContainer>
  )
}
export default Stats
