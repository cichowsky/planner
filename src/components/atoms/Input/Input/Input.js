import styled from 'styled-components';

const Input = styled.input`
  padding: 0.75em 1.5em;
  background-color: ${({ theme }) => theme.input.backgroundColor};
  border-radius: 9999px;
  border: none;

  &::placeholder {
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  &:focus {
    border-color: red;
    outline: 1px solid ${({ theme }) => theme.input.borderColor};
  }
`;

export default Input;
