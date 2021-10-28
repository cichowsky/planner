import styled from 'styled-components';
import { SButton } from 'components/atoms/ButtonIcon/ButtonIcon.styles';

export const SWrapper = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: ${({ theme }) => theme.navbar.thickness};
  background-color: ${({ theme }) => theme.navbar.backgroundColor};

  & ${SButton} {
    color: ${({ theme }) => theme.navbar.iconColor};
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
