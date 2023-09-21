import styled from 'styled-components'

interface Props {
  $areaName: string
  $justifyContent?: string
}

export const CardGrid = styled.div`
  display: grid;
  grid-template-areas:
    'one'
    'two'
    'three';
  gap: 0.5rem;
  @media (min-width: 60rem) {
    gap: 0;
    grid-template-areas:
      'two one'
      'two three';
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(2, 1fr);
  }
`

export const CardGridItem = styled.div<Props>`
  grid-area: ${({ $areaName }) => $areaName};
  display: flex;
  @media (min-width: 60rem) {
    justify-content: ${({ $justifyContent }) =>
      $justifyContent ? $justifyContent : 'flex-start'};
  }
`
