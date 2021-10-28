import styled from 'styled-components';

export const SButton = styled.button`
  width: 4rem;
  height: 4rem;

  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  padding: 0;

  color: ${({ theme }) => theme.buttonIcon.color};
  background-color: ${({ theme }) => theme.buttonIcon.backgroundColor};

  border: none;
  cursor: pointer;
  opacity: 0.8;
  transition: opacity 0.2s;

  &:hover,
  &:active,
  &.active {
    opacity: 1;
  }

  & > svg {
    height: 60%;
    width: auto;
    fill: currentColor;
  }
`;
