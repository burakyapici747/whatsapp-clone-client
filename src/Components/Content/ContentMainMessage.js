import React, {Component} from 'react';
import {
    ContentMainMessageBoxStyled, ContentMainMessageInfoMessageStyled,
    ContentMainMessageInfoStyled, ContentMainMessageInfoTimeStyled,
    ContentMainMessageStyled
} from "../../Assets/styles/Content/Content.styled";




const ContentMainMessage = (props) => {
    return(

        <ContentMainMessageStyled side={props.side}>
            <ContentMainMessageBoxStyled side={props.side}>
                <ContentMainMessageInfoStyled>
                    <ContentMainMessageInfoMessageStyled>
                        {
                            props.message
                        }
                    </ContentMainMessageInfoMessageStyled>
                    <ContentMainMessageInfoTimeStyled>
                        {props.time}
                    </ContentMainMessageInfoTimeStyled>
                </ContentMainMessageInfoStyled>
            </ContentMainMessageBoxStyled>
        </ContentMainMessageStyled>

    );
};

export default ContentMainMessage;