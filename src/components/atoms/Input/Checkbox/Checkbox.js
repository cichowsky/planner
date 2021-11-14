import styled from 'styled-components';

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  appearance: none;
  position: relative;
  font-size: 2rem;
  width: 1em;
  height: 1em;
  border: 1px solid ${({ theme }) => theme.input.borderColor};
  border-radius: 0.2em;
  background: ${({ theme }) => theme.color.white};
  cursor: pointer;
  transition: background 175ms cubic-bezier(0.1, 0.1, 0.25, 1);
  margin: 0;

  &::before {
    content: '';
    position: absolute;
    top: 0.05em;
    left: 0.3em;
    width: 0.3em;
    height: 0.6em;
    border-style: solid;
    border-color: ${({ theme }) => theme.color.white};
    border-width: 0 0.1em 0.1em 0;
    transform: rotate(45deg);
    opacity: 0;
  }

  &:checked {
    color: ${({ theme }) => theme.color.white};
    border-color: ${({ theme }) => theme.input.checkedColor};
    background: ${({ theme }) => theme.input.checkedColor};

    &::before {
      opacity: 1;
    }
  }
`;

export default Checkbox;
