import styled from 'styled-components';
import PropTypes from 'prop-types';
import Navbar from 'components/organisms/Navbar/Navbar';

const SWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding-top: ${({ theme }) => theme.navbar.thickness};
`;

const SContent = styled.main`
  flex-grow: 1;
  background-color: ${({ theme }) => theme.backgroundColor};
`;

const MainTemplate = ({ children }) => {
  return (
    <SWrapper>
      <Navbar />
      <SContent>{children}</SContent>
    </SWrapper>
  );
};

MainTemplate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default MainTemplate;
