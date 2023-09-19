import styled from 'styled-components';

const StyledButton = styled.button`
  border: 2px solid #4caf50;
  background-color: #4caf50;
  color: #fff;
  padding: 1rem 2rem;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.3s all ease-out;
`;

interface Props {
  children: React.ReactNode;
}

function Button({ children }: Props) {
  return <StyledButton>{children}</StyledButton>;
}
export default Button;
