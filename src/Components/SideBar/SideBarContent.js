import React, {Component, useEffect, useState} from 'react';
import {
    SideBarContentStyled,
    SideBarImageAvatarStyled,
    SideBarMessageStyled,
    SideBarMessageInfo,
    SideBarMessageInfoBottom,
    SideBarMessageInfoTitle,
    SideBarMessageInfoTitleSpan,
    SideBarMessageInfoTop, SideBarMessageIntoTime, SideBarMessageIntoTimeSpan,
    SideBarMessagesStyled
} from "../../Assets/styles/SideBar/SideBarContent.styled";
import ProfileImage from '../../Assets/image/avatarImage-profile.jpeg'
import {API_PATHS} from "./../../config/index";
import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux';
import {setChat} from "../../features/user/chatSlice";

const SideBarContent = () => {
    const [chatArr, setChatArr] = useState([]);
    const userId = useSelector((state) => state.userReducer.id);
    const dispatch = useDispatch();

    useEffect(() => {
        const response = axios.get(API_PATHS.GET_CHATS(userId))
            .then((response) => {
                const {data} = response.data;
                setChatArr(data);
            })
            .catch((error) => {
                console.log("Bir hata var", error);
            });

    }, []);

    const handleClick = (chatId) => {
        dispatch(setChat({
            id: chatId,
            name: chatArr[chatId - 1].name,
            imageURL: chatArr[chatId - 1].imageURL,
        }));
    };

    return(

        <SideBarContentStyled>
            <SideBarMessagesStyled>
                {
                    chatArr.map((value, index) => {
                        return(
                            <SideBarMessageStyled key={index} onClick={() => handleClick(value.id)}>
                                <SideBarImageAvatarStyled src={ProfileImage}>
                                </SideBarImageAvatarStyled>
                                <SideBarMessageInfo>
                                    <SideBarMessageInfoTop>
                                        <SideBarMessageInfoTitle>
                                            <SideBarMessageInfoTitleSpan>
                                                {
                                                    value.name
                                                }
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
                            </SideBarMessageStyled>
                        );
                    })
                }
            </SideBarMessagesStyled>
        </SideBarContentStyled>
    );
};

export default SideBarContent;



/*



*/