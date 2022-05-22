import React, {Component} from 'react';
import {ContentMainStyled} from "../../Assets/styles/Content/Content.styled";
import ContentMainMessages from './ContentMainMessages';
import ContentMainMessage from "./ContentMainMessage";

const ContentMain = () => {
    return(
        <ContentMainStyled>
            <ContentMainMessages>
            </ContentMainMessages>
        </ContentMainStyled>
    );
};

export default ContentMain;