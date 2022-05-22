import React, {Component} from 'react';
import {ContentMainMessagesStyled} from "../../Assets/styles/Content/Content.styled";
import ContentMainMessage from './ContentMainMessage';

const ContentMainMessages = () => {
    return(

        <ContentMainMessagesStyled>
            <ContentMainMessage side={1} message={"Hocam aykut uc yiyor"} time={"3:42 am"}/>
            <ContentMainMessage side={0} message={"Salak salak konusma"} time={"3:42 am"}/>
        </ContentMainMessagesStyled>

    );
};

export default ContentMainMessages;