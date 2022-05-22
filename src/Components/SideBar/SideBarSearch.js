import React, {Component} from 'react';
import {SideBarSearchStyled} from "../../Assets/styles/SideBar/SideBarSearch.styled";

const SideBarSearch = () => {
    return(
        <SideBarSearchStyled>
            <input type={"text"} placeholder={"Search or start new chat"}/>
        </SideBarSearchStyled>
    );
};


export default SideBarSearch;