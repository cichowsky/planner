import PropTypes from 'prop-types';
import icons from 'assets/icons';
import { SButton } from './ButtonIcon.styles';

const ButtonIcon = ({ icon, ...rest }) => {
  const SVG = icons[icon];
  return <SButton {...rest}>{SVG && <SVG />}</SButton>;
};

ButtonIcon.propTypes = {
  icon: PropTypes.oneOf(Object.keys(icons)).isRequired,
};

export default ButtonIcon;
