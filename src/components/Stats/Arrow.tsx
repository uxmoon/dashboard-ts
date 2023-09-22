import { StyledArrow } from './styles'

interface Props {
  isDecrease?: boolean
  lg?: boolean
  noMargin?: boolean
}

const Arrow = ({ isDecrease, lg, noMargin }: Props) => {
  return (
    <StyledArrow
      $noMargin={noMargin}
      $lg={lg}
      src={`img/icon-${isDecrease ? 'down' : 'up'}.svg`}
      alt={isDecrease ? 'Decrease' : 'Increase'}
    />
  )
}
export default Arrow
