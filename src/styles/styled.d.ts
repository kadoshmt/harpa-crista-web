import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primaryLight: string;
      primary: string;
      primaryDark: string;
      secundary: string;
      secundaryDark: string;
      background: string;
      text: string;
      titleInPrimary: string;
      textInPrimary: string;
      textTitle: string;
      inputBackground: string;
      buttonText: string;
      headerText: string;
      headerBackground: string;
      headerIcons: string;
      headerActiveIcons: string;
      footerText: string;
      footerBackground: string;
      lines: string;
      mainContent: string;
    };

    font: {
      family: string;
      sizes: {
        sm: string;
        md: string;
        lg: string;
        xl: string;
      };
    };
  }
}
