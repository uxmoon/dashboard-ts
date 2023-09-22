import styled, { css } from 'styled-components'
import { Text } from '../Typography'

interface Props {
  $decrease?: boolean
  $increase?: boolean
}

export const Head = styled.div`
  background-color: ${({ theme }) => theme.colors.bodyPattern};
  padding: 2.75rem 3.75rem 1.25rem;
`
export const Body = styled.div`
  background-color: ${({ theme }) => theme.colors.body};
  padding: 2rem 3.75rem;
`

export const StatsNumbers = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`

export const StatsNumbersItem = styled.p<Props>`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 2.5rem;
  font-weight: 700;

  ${({ $decrease, theme }) =>
    $decrease &&
    css`
      color: ${theme.colors.primary.red};
    `}

  ${({ $increase, theme }) =>
    $increase &&
    css`
      color: ${theme.colors.primary.green};
    `}
`

export const StatsNumbersLegend = styled(Text)`
  display: inline-block;
  width: 14ch;
  line-height: 1.2;
  overflow-wrap: break-word;
`
