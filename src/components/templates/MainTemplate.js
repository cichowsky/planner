import styled from 'styled-components';

const MainTemplate = styled.main`
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  background-color: ${({ theme }) => theme.backgroundColor};
`;

export default MainTemplate;
