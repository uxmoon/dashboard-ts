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
  top: 1rem;
  right: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.875rem;
  cursor: pointer;
  appearance: none;
  border: none;
  background-color: transparent;
  width: 2.5rem;
  height: 2.5rem;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.text};
`
