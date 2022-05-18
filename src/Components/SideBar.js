import React, {Component} from 'react';
import {SideBarStyled} from "../Assets/styles/SideBar/SideBar.styled";
import {SideBarHeaderStyled} from "../Assets/styles/SideBar/SideBarHeader.styled";
import {ProfileSettingStyled} from "../Assets/styles/SideBar/ProfileSetting.styled";
import Avatar from './Avatar';
const SideBar = (props) => {
    return (
        <SideBarStyled>
            <SideBarHeaderStyled>
                <ProfileSettingStyled>
                    <Avatar/>
                </ProfileSettingStyled>
            </SideBarHeaderStyled>
        </SideBarStyled>
    );
};


export default SideBar;