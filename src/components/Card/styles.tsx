import styled, { DefaultTheme, css } from 'styled-components'

interface Props {
  $hasBorder?: boolean
  $variant?: string
}

const handleVariant = (theme: DefaultTheme, variant?: string) => {
  switch (variant) {
    case 'facebook':
      return theme.colors.social.facebook
    case 'twitter':
      return theme.colors.social.twitter
    case 'instagram':
      return theme.colors.social.instagram
    case 'youtube':
      return theme.colors.social.youtube
  }
}

export const StyledCard = styled.button<Props>`
  border: none;
  appearance: none;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors.card};
  padding: 1rem;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  text-align: left;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.cardHover};
  }

  @media (min-width: 60rem) {
    padding: 1.5rem;
  }

  &:before {
    ${({ $hasBorder, $variant }) =>
      $hasBorder &&
      css`
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 4px;
        content: '';
        background: ${({ theme }) => handleVariant(theme, $variant)};
      `};
  }
`
