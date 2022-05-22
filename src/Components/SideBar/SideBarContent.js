import React, {Component} from 'react';
import {
    SideBarContentStyled,
    SideBarImageAvatar,
    SideBarMessage,
    SideBarMessageInfo,
    SideBarMessageInfoBottom,
    SideBarMessageInfoTitle,
    SideBarMessageInfoTitleSpan,
    SideBarMessageInfoTop, SideBarMessageIntoTime, SideBarMessageIntoTimeSpan,
    SideBarMessages
} from "../../Assets/styles/SideBar/SideBarContent.styled";

const SideBarContent = () => {
    return(
        <SideBarContentStyled>
            <SideBarMessages>
                <SideBarMessage>
                    <SideBarImageAvatar>

                    </SideBarImageAvatar>
                    <SideBarMessageInfo>
                        <SideBarMessageInfoTop>
                            <SideBarMessageInfoTitle>
                                <SideBarMessageInfoTitleSpan>
                                    Ham ham
                                </SideBarMessageInfoTitleSpan>
                            </SideBarMessageInfoTitle>
                            <SideBarMessageIntoTime>
                                <SideBarMessageIntoTimeSpan>
                                    9:13 am
                                </SideBarMessageIntoTimeSpan>
                            </SideBarMessageIntoTime>
                        </SideBarMessageInfoTop>
                        <SideBarMessageInfoBottom>
                            Muaz: Photo
                        </SideBarMessageInfoBottom>
                    </SideBarMessageInfo>

                </SideBarMessage>

            </SideBarMessages>
        </SideBarContentStyled>
    );
};

export default SideBarContent;