import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import { StoreProvider } from "./utils/useStore";
import { MainRoutes } from "./routes";
import "./custom.less";

export const Main = () => {
    return (
        <StoreProvider>
            <Router>
                <MainRoutes />
                {/* <ParticlesBg color={"#FE7519"} num={20} type={"cobweb"} bg={true} /> */}
            </Router>
        </StoreProvider>
    );
};
