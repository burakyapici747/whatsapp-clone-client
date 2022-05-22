import React, {Component} from 'react';
import ContentHeader from "./ContentHeader";
import ContentMain from "./ContentMain";
import ContentFooter from './ContentFooter';
import {ContentStyled} from "../../Assets/styles/Content/Content.styled";

const Content = () => {
    return (
        <>

            <ContentStyled>
                <ContentHeader>

                </ContentHeader>
                <ContentMain>

                </ContentMain>
                <ContentFooter>

                </ContentFooter>

            </ContentStyled>
        </>
    );
};

export default Content;