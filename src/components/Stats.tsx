import styled from 'styled-components'

interface Props {
  $justifyContent?: string
  $decrease?: boolean
  $flexDirection?: string
}

export const Stats = styled.p<Props>`
  display: flex;
  align-items: center;
  justify-content: ${({ $justifyContent }) =>
    $justifyContent ? $justifyContent : 'flex-start'};
  color: ${({ theme, $decrease }) =>
    $decrease ? theme.colors.primary.red : theme.colors.primary.green};
  font-size: 0.875rem;
  font-weight: 700;
`

export const StatsArrow = styled.img`
  display: inline-block;
  width: 0.5rem;
  height: 0.25rem;
  margin-right: 0.5rem;
`

export const StatsText = styled.p<Props>`
  display: flex;
  flex-direction: ${({ $flexDirection }) =>
    $flexDirection ? $flexDirection : 'row'};
  font-size: 2rem;
  font-weight: 700;
  span {
    display: block;
    font-size: 0.875rem;
    font-weight: 400;
  }
`
