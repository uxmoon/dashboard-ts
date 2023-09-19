import { ReactNode } from 'react'
import { StyledCard } from './styles'

interface Props {
  children: ReactNode
  hasBorder?: boolean
  variant?: string
}

const Card = ({ children, hasBorder, variant }: Props) => {
  return (
    <StyledCard $hasBorder={hasBorder} $variant={variant}>
      {children}
    </StyledCard>
  )
}

export default Card
