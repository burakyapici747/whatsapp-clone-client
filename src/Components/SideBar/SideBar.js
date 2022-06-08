import styled from 'styled-components';
import React, {Component} from 'react';
import {
    SideBarStyled,
    SideBarHeaderStyled,
    SideBarProfile,
    SideBarProfileAvatarContainer, SideBarProfileImage, SideBarProfileImageStyled
} from "../../Assets/styles/SideBar/SideBar.styled";
import {ContentStyled} from '../../Assets/styles/Content/Content.styled';
import SideBarSearch from "./SideBarSearch";
import SideBarContent from './SideBarContent';
import ProfileImage from '../../Assets/image/avatarImage-profile.jpeg'

const SideBar = () => {
    return (
        <>
            <SideBarStyled>
                <SideBarHeaderStyled>
                    <SideBarProfile>
                        <SideBarProfileAvatarContainer>
                            <SideBarProfileImageStyled src={ProfileImage}>
                            </SideBarProfileImageStyled>
                        </SideBarProfileAvatarContainer>
                    </SideBarProfile>
                    <SideBarSearch/>
                </SideBarHeaderStyled>
                <SideBarContent>

                </SideBarContent>
            </SideBarStyled>
        </>
    )
};


export default SideBar;