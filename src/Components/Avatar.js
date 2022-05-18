import React, {Component} from 'react';
import {ProfileImageAvatarContainer, ProfileImageAvatarImage} from "../Assets/styles/SideBar/ProfileSetting.styled";
import ProfileImage from './../Assets/image/avatarImage-profile.jpeg';
const Avatar = () => {
    return(
        <ProfileImageAvatarContainer>
            <ProfileImageAvatarImage
                src={ProfileImage}
                alt={"Profile image"}
            />
        </ProfileImageAvatarContainer>
    );
};

export default Avatar;