import React, { FC } from 'react';

import Theme from './styles/Theme';
import GlobalStyle from './styles/globalStyles';

import Header from './components/Header';
import Home from './components/Home';

const App: FC = () => (
  <Theme>
    <GlobalStyle />
    <Header />
    <Home />
  </Theme>
);

export default App;
