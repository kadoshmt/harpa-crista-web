// interface FontSizeProps {
//   sm: string;
//   md: string;
//   lg: string;
//   xl: string;
// }

// interface ThemeProps {
//   title: string;

//   colors: {
//     [key: string]: string;
//   };

//   font: {
//     family: string;
//     sizes: FontSizeProps;
//   };
// }

// interface TypeThemeProps {
//   [key: string]: ThemeProps;
// }

export default {
  light: {
    title: 'light',
    colors: {
      primaryLight: '#ff9100',
      primary: '#FF6000',
      primaryDark: '#dd3800',
      secundary: '#4a3f35',
      secundaryDark: '#2f2519',
      background: '#eef0f1',
      text: '#64707d',
      titleInPrimary: '#FFFFFF',
      textInPrimary: '#fefae0',
      textTitle: '#08090a',
      inputBackground: '#F8F8FC', // border b5bdc4
      buttonText: '#FFFFFF',

      headerText: '#4d5760',
      headerBackground: '#ffffff',
      headerIcons: '#363d44',
      headerActiveIcons: '#ff9100',
      lines: '#d7d9d9',

      footerText: '#eeeeee',
      footerBackground: '#333333',
      mainContent: '#ffffff',
    },

    font: {
      family: 'Roboto Slab',
      sizes: {
        sm: '1.2rem',
        md: '1.4rem',
        lg: '1.6rem',
        xl: '2.2rem',
      },
    },
  },
  dark: {
    title: 'dark',
    colors: {
      primaryLight: '#ff9100',
      primary: '#FF6000',
      primaryDark: '#dd3800',
      secundary: '#4a3f35',
      secundaryDark: '#2f2519',
      background: '#2f3136',
      text: '#b9bbbe',
      titleInPrimary: '#FFFFFF',
      textInPrimary: '#fefae0',
      textTitle: '#353535',
      inputBackground: '#202225',
      buttonText: '#FFFFFF',

      headerText: '#72767d',
      headerBackground: '#202225',
      headerIcons: '#666666',
      headerActiveIcons: '#FF6000',
      lines: '#222222',

      footerText: '#eeeeee',
      footerBackground: '#333333',
      mainContent: '#36393f',
    },

    font: {
      family: 'Roboto Slab',
      sizes: {
        sm: '1.2rem',
        md: '1.4rem',
        lg: '1.8rem',
        xl: '2.2rem',
      },
    },
  },
};
