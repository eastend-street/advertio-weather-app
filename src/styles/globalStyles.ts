import { createGlobalStyle } from 'styled-components';

import { ThemeType } from './Theme';

const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', 'sans-serif';
    height: 100vh;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.shadeCyan};
  }
`;

export default GlobalStyle;
