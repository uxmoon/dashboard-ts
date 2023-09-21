import styled from 'styled-components'

interface Props {
  $marginBottom?: number
  $isBold?: boolean
  $size?: string
  $flexDirection?: string
}

const handleSize = ($size?: string) => {
  switch ($size) {
    case 'lg':
      return '1.75rem'
    case 'md':
      return '1.5rem'
  }
}

export const Heading = styled.h2<Props>`
  font-size: ${({ $size }) => handleSize($size)};
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
  @media (min-width: 48rem) {
    letter-spacing: 0.25rem;
  }
`

export const TextBig = styled(Text)`
  text-align: center;
  font-size: 2.5rem;
  line-height: 1.2;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.headings};
  margin-bottom: 1.5rem;
  @media (min-width: 48rem) {
    font-size: 3.5rem;
  }
`

export const TextToggle = styled.label`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.text};
`

export const StatsText = styled.p<Props>`
  display: flex;
  flex-direction: ${({ $flexDirection }) =>
    $flexDirection ? $flexDirection : 'row'};
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.headings};
  span {
    display: block;
    font-size: 0.875rem;
    font-weight: 400;
  }
`
