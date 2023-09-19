import styled from 'styled-components'

export const TextFollowers = styled.p`
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  span {
    display: block;
    text-transform: uppercase;
    letter-spacing: 0.125rem;
    font-size: 0.875rem;
    font-weight: 400;

    @media (min-width: 48rem) {
      letter-spacing: 0.25rem;
    }
  }
`
