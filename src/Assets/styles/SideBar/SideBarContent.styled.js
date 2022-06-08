import styled from 'styled-components'

export const SideBarContentStyled = styled.div`
  height: 100%;
  width: 100%;
`;

export const SideBarMessagesStyled = styled.ul`
  height: 100%;
  width: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;
`;

export const SideBarMessageStyled = styled.li`
  height: 72px;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  cursor: pointer;
  padding: 10px;
  &:hover{
    background-color: #f5f6f6;
  }
`;

export const SideBarImageAvatarStyled = styled.img`
  height: 49px;
  width: 49px;
  border-radius: 50%;
`;

export const SideBarMessageInfo = styled.div`
  border-bottom: 1px solid #e9edef;
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 15px;
  justify-content: center;
`;

export const SideBarMessageInfoTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const SideBarMessageInfoBottom = styled.div`
  width: 100%;
  font-size: 14px;
  margin-top: 4px;
  color: gray;
`;

export const SideBarMessageInfoTitle = styled.div`
  flex: 1;
  height: 100%;
`;

export const SideBarMessageInfoTitleSpan = styled.span`
  font-size: 16px;
  width: 100%;
  height: 100%;
  font-weight: bold;
`;

export const SideBarMessageIntoTime = styled.div``;

export const SideBarMessageIntoTimeSpan = styled.span`
  text-transform: uppercase;
  font-size: 13px;
  font-weight: 600;
  color: #1fa855;
`;
