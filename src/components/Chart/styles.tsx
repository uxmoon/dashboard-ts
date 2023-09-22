import styled from 'styled-components'

export const StyledTooltip = styled.div`
  background-color: ${({ theme }) => theme.colors.body};
  border: 1px solid ${({ theme }) => theme.colors.chart};
  padding: 0.5rem;
  p {
    color: ${({ theme }) => theme.colors.chart};
  }
`
