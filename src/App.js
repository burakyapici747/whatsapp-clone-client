import React, {Component} from 'react';
import Global from './Assets/Global';
import {ContainerStyled} from './Assets/Container.styled';
import SideBar from './Components/SideBar/SideBar';
import Content from "./Components/Content/Content";


const App = () => {
    return (
        <>
            <Global/>
            <ContainerStyled>
                <SideBar>

                </SideBar>
                <Content>

                </Content>
            </ContainerStyled>
        </>
    );
}

export default App;
