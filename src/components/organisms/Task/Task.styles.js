import styled from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';

export const SWrapper = styled.div`
  position: relative;
  padding: 1.6rem 1.6rem 1.6rem 2.1rem;
  background-color: white;
  border-radius: 1rem;
  box-shadow: ${({ theme }) => theme.shadow};
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 0.5rem;
    height: 100%;

    background-color: ${({ theme, priority }) => {
      let color;
      if (priority === 0) {
        color = theme.variant.success;
      } else if (priority === 1) {
        color = theme.variant.warning;
      } else {
        color = theme.variant.danger;
      }
      return color;
    }};
  }
`;

export const SHeading = styled(Heading)`
  margin-bottom: 0.25em;
  margin-right: 2rem;
`;

export const SActions = styled.div`
  position: absolute;
  top: 1.8rem;
  right: 1rem;
`;

export const SDeadline = styled.span`
  margin-left: 0.5em;
`;

export const SDeadlineWrapper = styled(Paragraph)`
  display: flex;
  align-items: center;
`;
