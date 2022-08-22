import React, { FC } from 'react';

import Theme from './styles/Theme';
import GlobalStyle from './styles/globalStyles';
import Header from './components/Header';

const App: FC = () => (
  <Theme>
    <GlobalStyle />
    <Header />
  </Theme>
);

export default App;
