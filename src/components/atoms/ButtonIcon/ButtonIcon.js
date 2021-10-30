import PropTypes from 'prop-types';
import icons from 'assets/icons';
import { SButton } from './ButtonIcon.styles';

const ButtonIcon = ({ icon, indicated, ...rest }) => {
  const SVG = icons[icon];
  return (
    <SButton indicated={indicated && 1} {...rest}>
      {SVG && <SVG />}
    </SButton>
  );
};

ButtonIcon.propTypes = {
  icon: PropTypes.oneOf(Object.keys(icons)).isRequired,
  indicated: PropTypes.bool,
};

export default ButtonIcon;
