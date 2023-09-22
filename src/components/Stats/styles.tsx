import styled, { css } from 'styled-components'

interface Props {
  $decrease?: boolean
  $lg?: boolean
  $noMargin?: boolean
}

export const StatsContainer = styled.p<Props>`
  display: flex;
  align-items: center;
  color: ${({ theme, $decrease }) =>
    $decrease ? theme.colors.primary.red : theme.colors.primary.green};
  font-size: 0.875rem;
  font-weight: 700;
`

export const StyledArrow = styled.img<Props>`
  display: inline-block;
  width: 0.5rem;
  height: 0.25rem;
  margin-right: ${({ $noMargin }) => ($noMargin ? 0 : '0.5rem')};

  ${({ $lg }) =>
    $lg &&
    css`
      width: 0.625rem;
      height: 0.375rem;
    `}
`
