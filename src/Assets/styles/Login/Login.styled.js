import styled from 'styled-components';



export const LoginContainerStyled = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;


export const LoginFormStyled = styled.div`
  width: 425px;
  height: 425px;
  background-color: #EFF2F5;
  border-radius: 8px;
  box-shadow: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const LoginHeaderTitleStyled = styled.h1`
  color: black;
  text-align: center;
`;

export const LoginHeaderStyled = styled.div`
  width: 100%;
  height: 100px;
`;

export const LoginMainStyled = styled.div`
  width: 100%;
  height: 300px;
  padding: 0 25px;
`;

export const FormGroupStyled = styled.div`
  width: 100%;
  margin-bottom: 25px;
`;

export const LoginInputStyled = styled.input`
  width: 100%;
  padding: 15px;
  font-size: 15px;
  border-radius: 8px;
  border:none;
  outline: none;
`;

export const LoginButtonStyled = styled.button`
  width: 100%;
  border:none;
  outline: none;
  background-color: teal;
  color: white;
  padding: 15px;
  border-radius: 5px;
  font-size: 17px;
  cursor: pointer;
`;