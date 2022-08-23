import Theme from '../src/styles/Theme';
import GlobalStyle from '../src/styles/globalStyles';

export const decorators = [
  (Story) => (
    <Theme>
      <GlobalStyle />
      <Story />
    </Theme>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
