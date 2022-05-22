import styled from "styled-components";


export const ContentStyled = styled.div`
  flex: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const ContentHeaderStyled = styled.div`
  height: 59px;
  width: 100%;
  background-color: #EFF2F5;
`;

export const ContentMainStyled = styled.div`
  order: 2;
  flex: 1 1 0;
  background-color: #F0EBE3;
  overflow: auto;
`;

export const ContentMainMessagesStyled = styled.ul`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  padding: 50px 9% 50px 9%;
`;

export const ContentMainMessageStyled = styled.li`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => (props.side) ? 'start' : 'flex-end'};
  margin-bottom: 2px;
`;

export const ContentMainMessageBoxStyled = styled.div`
  max-height: 600px;
  min-height: 33px;
  background-color: ${(props) => (props.side) ? '#fff' : '#d9fdd3'};
  border-radius: 7.5px;
  box-shadow: 0 1px 0.5px rgba(11, 20, 26, .13);
  padding: 6px 7px 8px 9px;
  max-width: 65%;
`;

export const ContentMainMessageInfoStyled = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const ContentMainMessageInfoMessageStyled = styled.div`
  width: 100%;
  position: relative;
  flex: none;
  padding-right: 35px;
  font-size: 14.2px;
  line-height: 19px;
  color: #111b21;
`;

export const ContentMainMessageInfoTimeStyled = styled.div`
  width: 100%;
  height: 10px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  font-size: 11px;
  text-transform: uppercase;
  color: #667781;
`;

export const ContentFooterStyled = styled.div`
  position: relative;
  z-index: 1;
  box-sizing: border-box;
  flex: none;
  order: 3;
  width: 100%;
  min-height: 62px;
  background-color: #EFF2F5;
  display: flex;
  flex-direction: row;
  padding: 5px 17px 5px 10px;
`;

export const ContentFooterIconBoxStyled = styled.div`
  
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  
`;

export const ContentFooterInputBoxStyled = styled.div`
  display: flex;
  align-items: center;
  flex: 1 1 0;
  justify-content: center;
  margin: 5px 10px;
`;

export const ContentFooterButtonBoxStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  cursor: pointer;
`;

export const ContentFooterInputStyled = styled.input`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  border:none;
  outline: none;
  font-size: 15px;
  color: gray;
  padding: 9px 12px 11px;
`;