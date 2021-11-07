import styled from 'styled-components';

const Heading = styled.h2`
  font-size: ${({ theme, isBig }) => (isBig ? theme.fontSize.xl : theme.fontSize.l)};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  margin-top: 0;
  margin-bottom: 0.75em;
  line-height: 1.2;
`;

export default Heading;
