import styled from 'styled-components';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import icons from 'assets/icons';

const SList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
`;

const SNavLink = styled(NavLink)`
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

const IconedNav = ({ links }) => {
  return (
    <nav>
      <SList>
        {links &&
          links.map(({ path, icon, label }) => {
            return (
              <li key={label}>
                <ButtonIcon as={SNavLink} to={path} icon={icon} title={label} />
              </li>
            );
          })}
      </SList>
    </nav>
  );
};

IconedNav.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      icon: PropTypes.oneOf(Object.keys(icons)).isRequired,
      label: PropTypes.string.isRequired,
    }).isRequired
  ),
};

export default IconedNav;
