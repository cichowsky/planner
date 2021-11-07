import styled from 'styled-components';

const Button = styled.button`
  font-size: ${({ theme, isSmall }) => (isSmall ? theme.fontSize.xs : theme.fontSize.s)};
  line-height: 1;
  padding: 0.5em 1.25em;
  color: ${({ theme }) => theme.button.color};
  background-color: ${({ theme }) => theme.button.backgroundColor};
  border: none;
  border-radius: 99999px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.button.backgroundColor};
  }
`;

export default Button;
