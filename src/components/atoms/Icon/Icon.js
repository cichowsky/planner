import styled from 'styled-components';
import PropTypes from 'prop-types';
import icons from 'assets/icons';

export const SIcon = styled.span`
  height: ${({ height }) => height || '1em'};
  min-width: 1em;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  flex-shrink: 0;

  & > svg {
    height: 100%;
    width: auto;
    fill: currentColor;
  }
`;

const Icon = ({ icon, ...props }) => {
  const SVG = icons[icon];
  return <SIcon {...props}>{SVG && <SVG />}</SIcon>;
};

Icon.propTypes = {
  icon: PropTypes.oneOf(Object.keys(icons)).isRequired,
};

export default Icon;
