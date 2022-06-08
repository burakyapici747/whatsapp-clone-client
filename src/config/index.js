import Login from '../Components/Login';
import Chat from '../Components/Chat';
const BASE_URL = "http://localhost:8080/";


const ROUTE_PATHS = {
    LOGIN: '/',
    CHAT: '/chat',
};

const API_PATHS = {
    LOGIN: (email, password) => {
        return `${BASE_URL}user/login`;
    },
    REGISTER: (email, password) => {
        return `${BASE_URL}user/register`;
    },
    GET_CHATS: (id) => {
        return `${BASE_URL}chat/chats/${id}`;
    },
    GET_CHAT_MESSAGES: (chatId) => {
        return `${BASE_URL}message/messages/${chatId}`;
    },
};

const ROUTE_CONFIG = {
    ROUTES:  [
        {
            path: '/',
            isRequiredAuth: false,
            exact: false,
            component: <Login/>,
        },
        {
            path: '/register',
            isRequiredAuth: false,
            exact: true,
        },
        {
            path: '/chat',
            isRequiredAuth: true,
            exact: true,
            negativeComponent: <Login/>,
            component: <Chat/>
        }
    ],
};

export default ROUTE_CONFIG;
export {
    API_PATHS,
    BASE_URL,
    ROUTE_PATHS,
};