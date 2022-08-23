import React, { FC, ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';

import Theme from './styles/Theme';
import GlobalStyle from './styles/globalStyles';

const AllTheProviders: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Theme>
      <GlobalStyle />
      {children}
    </Theme>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
