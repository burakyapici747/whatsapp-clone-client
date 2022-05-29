import React, {Component} from 'react';
import {useSelector} from 'react-redux';
import ROUTE_CONFIG from "./config";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";


const App = () => {
    const {isLogged} = useSelector(state => state.userReducer);

    return (
        <BrowserRouter>
            <Routes>
                {
                    ROUTE_CONFIG.ROUTES.map((route, index) => {
                        if (route.isRequiredAuth && !isLogged) {
                            return (
                                <Route
                                    key={index}
                                    exact={route.exact}
                                    element={route.negativeComponent}
                                    path={route.path}
                                />
                            );
                        } else if (route.isRequiredAuth && isLogged) {
                            return (
                                <Route
                                    key={index}
                                    exact={route.exact}
                                    element={route.component}
                                    path={route.path}
                                />
                            );
                        } else {
                            return(
                                <Route
                                    key={index}
                                    exact={route.exact}
                                    element={route.component}
                                    path={route.path}
                                />
                            );
                        }
                    })
                }
            </Routes>
        </BrowserRouter>
    );
}

export default App;