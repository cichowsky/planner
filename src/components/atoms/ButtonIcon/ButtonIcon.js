import styled from 'styled-components';
import PropTypes from 'prop-types';
import icons from 'assets/icons';

const SButton = styled.button`
  width: 4rem;
  height: 4rem;

  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  padding: 0;

  color: ${({ theme }) => theme.buttonIcon.color};
  background-color: ${({ theme }) => theme.buttonIcon.backgroundColor};

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
  return <SButton {...props}>{SVG && <SVG />}</SButton>;
};

ButtonIcon.propTypes = {
  icon: PropTypes.oneOf(Object.keys(icons)).isRequired,
};

export default ButtonIcon;