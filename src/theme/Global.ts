import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  * {
    font-family: 'Open Sans', sans-serif;
  }
`;

// export const lightTheme = {
//   body: '#FFF',
//   text: '#363537',
//   toggleBorder: '#FFF',
//   background: '#363537',
// }

// export const darkTheme = {
//   body: '#363537',
//   text: '#FAFAFA',
//   toggleBorder: '#6B8096',
//   background: '#999',
// }

export const theme = {
    colors: {
        primary: '#eded00',
        yellow: '#ffff00',
    },
};
