import React, {Component} from 'react';
import Content from './Content/Content';
import SideBar from './SideBar/SideBar';
import GlobalStyled from "../Assets/styles/Login/Global.styled";
import {ContainerStyled} from "../Assets/Container.styled";

const Chat = () => {
    return(
        <>
            <GlobalStyled/>
            <ContainerStyled>
                <SideBar/>
                <Content/>
            </ContainerStyled>

        </>
    );
};

export default Chat;