import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      purple: {
        primary: string;
        secondary: string;
      };
      black: {
        text: string;
      };
      bg: string;
    };
  }
}
