import Login from '../Components/Login';
import Chat from '../Components/Chat';
const BASE_URL = "http://localhost:8080/";


const ROUTE_PATHS = {
    LOGIN: '/',
    CHAT: '/chat',
};

const API_PATHS = {
    LOGIN: () => {
        return `${BASE_URL}user/login`;
    },
    REGISTER: () => {
        return `${BASE_URL}user/register`;
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
    BASE_URL,
    API_PATHS,
    ROUTE_PATHS,
};