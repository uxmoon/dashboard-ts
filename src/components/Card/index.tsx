import { MouseEventHandler, ReactNode } from 'react'
import { StyledCard } from './styles'

interface Props {
  children: ReactNode
  hasBorder?: boolean
  variant?: string
  onClick: MouseEventHandler
}

const Card = ({ children, hasBorder, variant, onClick }: Props) => {
  return (
    <StyledCard $hasBorder={hasBorder} $variant={variant} onClick={onClick}>
      {children}
    </StyledCard>
  )
}

export default Card
