import PropTypes from 'prop-types';
import styled from 'styled-components';

const SGridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 16px;
`;

const GridTemplate = ({ children }) => {
  return <SGridWrapper>{children}</SGridWrapper>;
};

GridTemplate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default GridTemplate;
