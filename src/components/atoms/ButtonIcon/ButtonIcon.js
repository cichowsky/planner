import styled from 'styled-components';
import PropTypes from 'prop-types';
import icons from 'assets/icons';

const Wrapper = styled.button`
  width: 4rem;
  height: 4rem;

  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 0;

  color: ${({ theme }) => theme.buttonTextColor};
  background-color: ${({ theme }) => theme.buttonBackgroundColor};

  border: none;
  cursor: pointer;

  & > svg {
    height: 60%;
    width: auto;
    fill: currentColor;
  }
`;

const ButtonIcon = ({ icon, ...props }) => {
  const SVG = icons[icon];
  return <Wrapper {...props}>{SVG && <SVG />}</Wrapper>;
};

ButtonIcon.propTypes = {
  icon: PropTypes.oneOf(Object.keys(icons)).isRequired,
};

export default ButtonIcon;
