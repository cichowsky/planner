import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import IconedNav from 'components/molecules/IconedNav/IconedNav';
import ButtonIcon, { SButton } from 'components/atoms/ButtonIcon/ButtonIcon';

const SWrapper = styled.header`
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

const SInnerWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

const navLinks = [
  { path: '/todo', icon: 'todolist', label: 'To Do' },
  { path: '/calendar', icon: 'calendar', label: 'Calendar' },
  { path: '/shopping', icon: 'shopping', label: 'Shopping' },
];

const Navbar = () => {
  return (
    <SWrapper>
      <SInnerWrapper>
        <strong>Logo</strong>
        <IconedNav links={navLinks} />
        <ButtonIcon as={NavLink} to="/settings" icon="settings" title="Settings" />
      </SInnerWrapper>
    </SWrapper>
  );
};

export default Navbar;
