import styled, { css } from 'styled-components'

interface Props {
  $marginBottom?: number
  $isBold?: boolean
  $size?: string
  $flexDirection?: string
  $isUpper?: boolean
  $isBlock?: boolean
  $isFlex?: boolean
  $hasTracking?: boolean
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
  margin-bottom: ${({ $marginBottom }) =>
    $marginBottom ? $marginBottom + 'rem' : 0};

  ${({ $isBlock }) =>
    $isBlock &&
    css`
      display: block;
    `}

  ${({ $isFlex }) =>
    $isFlex &&
    css`
      display: flex;
      align-items: center;
      gap: 0.25rem;
    `}
  ${({ $isUpper }) =>
    $isUpper &&
    css`
      text-transform: uppercase;
    `}
  ${({ $hasTracking }) =>
    $hasTracking &&
    css`
      letter-spacing: 0.125rem;
      @media (min-width: 60rem) {
        letter-spacing: 0.25rem;
      }
    `}
`

export const TextBig = styled(Text)`
  text-align: center;
  font-size: 2.5rem;
  line-height: 1.2;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.headings};
  margin-bottom: 1.5rem;
  @media (min-width: 60rem) {
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
