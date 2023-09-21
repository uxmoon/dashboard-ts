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

export const StyledCard = styled.div<Props>`
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors.card};
  padding: 1rem;
  margin-bottom: 1rem;
  position: relative;
  overflow: hidden;

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
