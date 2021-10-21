import styled from 'styled-components';

const Heading = styled.h2`
  font-size: ${({ theme, isBig }) => (isBig ? theme.fontSize.xxl : theme.fontSize.xl)};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export default Heading;
