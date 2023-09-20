import styled from 'styled-components'

interface Props {
  $marginBottom?: number
  $isBold?: boolean
}

export const Heading1 = styled.h1<Props>`
  font-size: 1.75rem;
  margin-bottom: ${({ $marginBottom }) =>
    $marginBottom ? $marginBottom + 'rem' : 0};
  color: ${({ theme }) => theme.colors.headings};
`

export const Heading2 = styled.h2<Props>`
  font-size: 1.5rem;
  margin-bottom: ${({ $marginBottom }) =>
    $marginBottom ? $marginBottom + 'rem' : 0};
  color: ${({ theme }) => theme.colors.headings};
`

export const Text = styled.p<Props>`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.text};
  font-weight: ${({ $isBold }) => ($isBold ? 700 : 400)};
`

export const TextStats = styled(Text)`
  display: block;
  text-transform: uppercase;
  letter-spacing: 0.125rem;
`

export const TextBig = styled(Text)`
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.headings};
`

export const TextToggle = styled.label`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.text};
`
