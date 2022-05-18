import {createGlobalStyle} from "styled-components";


const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&display=swap');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    text-decoration: none;
    list-style: none;
  }
  
  body {
    font-family: 'Open Sans', sans-serif;
    font-size: 1.15em;
  }
  
`;

export default GlobalStyles;
