import styled from 'styled-components'

interface Props {
  $alignItems?: string
  $gap?: number
  $justifyContent?: string
  $flexDirection?: string
  $marginBottom?: number
}

export const Flex = styled.div<Props>`
  display: flex;
  align-items: ${({ $alignItems }) =>
    $alignItems ? $alignItems : 'flex-start'};
  justify-content: ${({ $justifyContent }) =>
    $justifyContent ? $justifyContent : 'flex-start'};
  gap: ${({ $gap }) => ($gap ? $gap + 'rem' : 0)};
  flex-direction: ${({ $flexDirection }) =>
    $flexDirection ? $flexDirection : 'row'};
  margin-bottom: ${({ $marginBottom }) =>
    $marginBottom ? $marginBottom + 'rem' : 0};
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  @media (min-width: 48rem) {
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
  }
`

export const Container = styled.div<Props>`
  width: 100%;
  max-width: 70rem;
  margin: 0 auto;
  margin-bottom: ${({ $marginBottom }) =>
    $marginBottom ? $marginBottom + 'rem' : 0};
`

export const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
