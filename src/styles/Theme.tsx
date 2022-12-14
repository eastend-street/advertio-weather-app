import React, { FC } from 'react';
import { ThemeProvider } from 'styled-components';

export const theme = {
  colors: {
    white: '#ffffff',
    black: '#000000',
    shadeCyan: '#577e8d',
    darkShadeCyan: '#3f5b65',
    orange: '#ff643f',
    grey: '#777777',
    lightGrey: '#e6e6e6',
  },
  fonts: ['Roboto', 'sans-serif'],
  fontSizes: {
    size1: '1rem',
    size2: '1.2rem',
    size3: '1.4rem',
    size4: '1.6rem',
    size5: '1.8rem',
    size6: '2rem',
    size7: '2.2rem',
    size8: '2.4rem',
    size9: '2.6rem',
    size10: '2.8rem',
    size11: '3rem',
  },
  fontWeight: {
    regular: 400,
    medium: 500,
    bold: 700,
  },
  contentMaxWidth: '400px',
  shadow: {
    base: '0px 6px 6px -2px rgb(0, 0, 0, 0.4)',
  },
};

export type ThemeType = typeof theme;

const Theme: FC = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
