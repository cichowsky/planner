import styled from 'styled-components';
import { SButton } from 'components/atoms/ButtonIcon/ButtonIcon.styles';
import { SIcon } from 'components/atoms/Icon/Icon';

export const SWrapper = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: ${({ theme }) => theme.navbar.thickness};
  background-color: ${({ theme }) => theme.navbar.backgroundColor};

  & ${SButton}, ${SIcon} {
    color: ${({ theme }) => theme.navbar.linkColor};

    &.active {
      color: ${({ theme }) => theme.navbar.backgroundColor};
      background-color: ${({ theme }) => theme.navbar.linkColor};
    }
  }
`;

export const SInnerWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;
