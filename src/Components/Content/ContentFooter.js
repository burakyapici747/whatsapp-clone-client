import React, {Component} from 'react';
import {
    ContentFooterButtonBoxStyled,
    ContentFooterIconBoxStyled, ContentFooterInputBoxStyled, ContentFooterStyled
} from "../../Assets/styles/Content/Content.styled";
import ContentFooterSendMessageButton from "./ContentFooterSendMessageButton";
import ContentMessageInput from "./ContentMessageInput";


const ContentFooter = () => {
    return(
        <ContentFooterStyled>

            <ContentFooterIconBoxStyled>

            </ContentFooterIconBoxStyled>

            <ContentFooterInputBoxStyled>
                <ContentMessageInput>

                </ContentMessageInput>
            </ContentFooterInputBoxStyled>

            <ContentFooterButtonBoxStyled>
                <ContentFooterSendMessageButton>

                </ContentFooterSendMessageButton>
            </ContentFooterButtonBoxStyled>

        </ContentFooterStyled>
    );
};

export default ContentFooter;