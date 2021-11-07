import styled from 'styled-components';

const Paragraph = styled.p`
  margin-top: 0;
  margin-bottom: ${({ mb0 }) => (mb0 ? '0' : '0.75em')};
  font-size: ${({ theme, isSmall }) => (isSmall ? theme.fontSize.s : theme.fontSize.m)};
  color: ${({ theme, muted }) => (muted ? theme.textMuted : theme.textColor)};
`;

export default Paragraph;
