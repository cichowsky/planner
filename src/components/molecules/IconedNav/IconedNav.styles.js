import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const SList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
`;

export const SNavLink = styled(NavLink)`
  position: relative;

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
