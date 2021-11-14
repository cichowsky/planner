import styled from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';

export const SWrapper = styled.div`
  position: relative;
  min-width: 250px;
  padding: 1.6rem 1.6rem 1.6rem 2.1rem;
  background-color: white;
  border-radius: 1rem;
  box-shadow: 0 0.5em 1em -0.125em rgb(10 10 10 / 10%);
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
`;

export const SActions = styled.div`
  position: absolute;
  top: 6px;
  right: 4px;
`;

export const SDeadline = styled.span`
  margin-left: 0.5em;
`;

export const SDeadlineWrapper = styled(Paragraph)`
  display: flex;
  align-items: center;
`;
