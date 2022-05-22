import {createGlobalStyle} from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    text-decoration: none;
    list-style: none;
    box-sizing: border-box;
  }

  body {
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&display=swap');
    font-family: 'Open Sans', sans-serif;
    height: 100vh;
    width: 100vw;
    background-color: #E3E1DF;
    z-index: 2;

    &::after {
      position: fixed;
      top: 0;
      z-index: -1;
      width: 100%;
      height: 127px;
      content: "";
      background-color: #20A884;
    }
  }

  ::-webkit-scrollbar {
    width: 6px;
  }
  
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background-color: #C9C9C5;
  }

`;