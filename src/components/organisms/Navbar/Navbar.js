import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';

const SWrapper = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: ${({ theme }) => theme.navbar.thickness};
  background-color: ${({ theme }) => theme.navbar.backgroundColor};
`;

const SInnerWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1rem;

  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
`;

const SNavLink = styled(NavLink)`
  color: ${({ theme }) => theme.navbar.iconColor};
  position: relative;
  opacity: 0.7;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.85;
  }

  &.active {
    opacity: 1;
  }

  &::before {
    position: absolute;
    content: '';
    bottom: 0%;
    left: 50%;
    transform: translateX(-50%);
    width: 60%;
    height: 2px;
    background-color: currentColor;
    opacity: 0;
  }

  &.active::before {
    opacity: 1;
  }
`;

const Navbar = () => {
  return (
    <SWrapper>
      <SInnerWrapper>
        <ButtonIcon icon="todolist" as={SNavLink} to="/todo" />
        <ButtonIcon icon="calendar" as={SNavLink} to="/calendar" />
        <ButtonIcon icon="shopping" as={SNavLink} to="/shopping" />
        <ButtonIcon icon="settings" as={SNavLink} to="/settings" />
      </SInnerWrapper>
    </SWrapper>
  );
};

export default Navbar;
