import React, { FC } from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    white: '#ffffff',
    shadeCyan: '#577e8d',
    darkShadeCyan: '#3f5b65',
  },
  fonts: ['Roboto', 'sans-serif'],
  fontSizes: {
    small: '1rem',
    medium: '2rem',
    large: '3rem',
    XLarge: '4rem',
  },
  fontWeight: {
    regular: 400,
    medium: 500,
    bold: 700,
  },
  contentMaxWidth: '1024px',
};

export type ThemeType = typeof theme;

const Theme: FC = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
