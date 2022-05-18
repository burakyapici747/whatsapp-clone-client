import React, {Component} from 'react';
import {MainAppStyled} from './Assets/styles/MainApp.styled';
import {ContainerStyled} from './Assets/styles/Container.styled';
import Global from './Assets/styles/Global';
import {ContentStyled} from './Assets/styles/Content.styled';
import SideBar from './Components/SideBar';

const App = () => {
    return (
        <>
            <Global/>
            <MainAppStyled>
                <ContainerStyled>
                    <SideBar>

                    </SideBar>
                    <ContentStyled>

                    </ContentStyled>
                </ContainerStyled>
            </MainAppStyled>
        </>
    );
}

export default App;
