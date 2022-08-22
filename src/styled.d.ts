import 'styled-components';

import { ThemeType } from './styles/Theme';

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
