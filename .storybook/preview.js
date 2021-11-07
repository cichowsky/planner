import ThemeProvider from 'providers/ThemeProvider';
import styled from 'styled-components';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const StoryWrapper = styled.div`
  background-color: ${({ theme }) => theme.backgroundColor};
  margin: -1rem;
  padding: 1rem;
  height: 100vh;
`;

export const decorators = [
  (Story) => (
    <ThemeProvider>
      <StoryWrapper>
        <Story />
      </StoryWrapper>
    </ThemeProvider>
  ),
];
