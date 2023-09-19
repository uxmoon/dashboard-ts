import styled from 'styled-components'

interface Props {
  $marginBottom?: number
  $isBold?: boolean
}

export const Heading1 = styled.h1<Props>`
  font-size: 1.75rem;
  margin-bottom: ${({ $marginBottom }) =>
    $marginBottom ? $marginBottom + 'rem' : 0};
`

export const Heading2 = styled.h2<Props>`
  font-size: 1.5rem;
  margin-bottom: ${({ $marginBottom }) =>
    $marginBottom ? $marginBottom + 'rem' : 0};
`

export const Text = styled.p<Props>`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.light.dark_grayish_blue};
  font-weight: ${({ $isBold }) => ($isBold ? 700 : 400)};
`
