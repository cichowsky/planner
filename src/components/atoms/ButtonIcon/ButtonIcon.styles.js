import styled, { css } from 'styled-components';

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

  ${({ indicated }) =>
    indicated &&
    css`
      position: relative;

      &::before {
        position: absolute;
        content: '';
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 50%;
        height: 0.2rem;
        border-radius: 0.2rem;
        background-color: currentColor;
        opacity: 0;
        transition: opacity 0.2s;
      }

      &.active::before {
        opacity: 1;
      }
    `}
`;
