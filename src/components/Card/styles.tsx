import styled, { DefaultTheme } from 'styled-components'

interface Props {
  $hasBorder?: boolean
  $variant?: string
}

const handleVariant = (theme: DefaultTheme, variant: string) => {
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
  background-color: ${({ theme }) => theme.colors.light.light_grayish_blue};
  padding: 1rem;
  margin-bottom: 1rem;
  border-top-width: ${({ $hasBorder }) => ($hasBorder ? '4px' : 0)};
  border-top-style: solid;
  border-color: ${({ theme, $variant }) => handleVariant(theme, $variant)};
`
