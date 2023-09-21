import styled from 'styled-components'

export const Dialog = styled.dialog`
  max-width: 20rem;
  padding: 2rem;
  border: 0;
  border-radius: 0.5rem;
  position: relative;
  box-shadow: hsl(0 0% 0% / 10%) 0 0 0.5rem 0.25rem;
  &::backdrop {
    background: hsl(0 0% 0% / 50%);
  }
`

export const CloseButton = styled.button`
  font-size: 0.75em;
  position: absolute;
  top: 0.25em;
  right: 0.25em;
`
