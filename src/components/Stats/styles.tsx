import styled from 'styled-components'

interface Props {
  $decrease?: boolean
}

export const StatsContainer = styled.p<Props>`
  display: flex;
  align-items: center;
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
