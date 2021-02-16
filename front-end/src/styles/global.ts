import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  body {
    background: #fff;
    color: #69737a;
	  -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
  }
  body, input, button {
    font-family: 'Effra-Rg', 'Roboto', Arial, Helvetica, sans-serif;
    font-size: 12px;
  }
  h1, h2, h3, h4, h5, h6, strong {
    color: #1a237a;
    font-weight: 600;
    font-size: 24px;
  }
  button {
    cursor: pointer;
  }
`;
