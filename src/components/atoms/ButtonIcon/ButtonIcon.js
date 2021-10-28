import PropTypes from 'prop-types';
import icons from 'assets/icons';
import { SButton } from './ButtonIcon.styles';

const ButtonIcon = ({ icon, ...props }) => {
  const SVG = icons[icon];
  return <SButton {...props}>{SVG && <SVG />}</SButton>;
};

ButtonIcon.propTypes = {
  icon: PropTypes.oneOf(Object.keys(icons)).isRequired,
};

export default ButtonIcon;
