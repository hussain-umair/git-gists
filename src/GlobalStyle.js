import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body{
    margin: 0;
    font-family: Helvetica Neue,Helvetica,Segoe UI,Arial,freesans,sans-serif;
    color: #626465;
    height: 100vh;
  }
  #root {
    height: 100vh;
  }
  *{
    box-sizing: border-box;
  }
  a{
    color: #00a9f2;
    text-decoration: none;
  }
`;

export default GlobalStyles;
