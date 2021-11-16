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
  border-radius: 0.8rem;
  cursor: pointer;
  transition: color 0.2s, background-color 0.2s;

  &:hover,
  &:active,
  &.active {
    color: ${({ theme }) => theme.buttonIcon.hoverColor};
  }

  & > svg {
    height: 2.4rem;
    width: auto;
    fill: currentColor;
  }
`;
