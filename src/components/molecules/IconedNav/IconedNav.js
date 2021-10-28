import PropTypes from 'prop-types';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import icons from 'assets/icons';
import { SList, SNavLink } from './IconedNav.styles';

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
