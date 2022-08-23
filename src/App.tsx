import React, { FC } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import Theme from './styles/Theme';
import GlobalStyle from './styles/globalStyles';

import ErrorFallback from './components/ErrorFallback';
import Header from './components/Header';
import Home from './components/Home';

const App: FC = () => (
  <ErrorBoundary FallbackComponent={ErrorFallback}>
    <Theme>
      <GlobalStyle />
      <Header />
      <Home />
    </Theme>
  </ErrorBoundary>
);

export default App;
