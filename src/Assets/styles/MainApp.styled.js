import styled from 'styled-components';


export const MainAppStyled = styled.div`
  width: 100vw;
  height: 100vh;
  border: 1px solid black;
  background-color: #E0E0DE;
  &::after{
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1;
    height: 127px;
    content: "";
    background-color: #20A884;
  }
`;
