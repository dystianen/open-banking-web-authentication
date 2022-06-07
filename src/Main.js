import React from "react";
import {BrowserRouter as Router, useLocation} from "react-router-dom";
import { StoreProvider } from "./utils/useStore";
import { MainRoutes } from "./routes";
import "./custom.less";
import * as queryString from "querystring";

export const Main = () => {
    const {search} = useLocation();

    let deleteFirstCharacter = search.substr(1) // Delete character ?
    const query = queryString.parse(deleteFirstCharacter)
    localStorage.setItem('customer_ref_id', query.customer_ref_id);
    localStorage.setItem('customer_name', query.customer_name);
    localStorage.setItem('access_token', query.accessToken);
    localStorage.setItem('userID', query.userId);
    localStorage.setItem('type', query.type)

    return (
        <StoreProvider>
            <Router>
                <MainRoutes />
                {/* <ParticlesBg color={"#FE7519"} num={20} type={"cobweb"} bg={true} /> */}
            </Router>
        </StoreProvider>
    );
};
