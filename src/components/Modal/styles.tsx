import styled from 'styled-components'

export const Dialog = styled.dialog`
  position: relative;
  width: 100%;
  max-width: 62rem;
  padding: 0;
  border: 0;
  border-radius: 1rem;
  box-shadow: hsl(0 0% 0% / 10%) 0 0 0.5rem 0.25rem;
  &::backdrop {
    background: hsl(0 0% 0% / 50%);
  }
`

export const CloseButton = styled.button`
  position: absolute;
  top: 0.25em;
  right: 0.25em;
  font-size: 0.875rem;
  cursor: pointer;
`
