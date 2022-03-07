
import { AnimatedSwitch } from "react-router-transition";
import { Redirect, Route, Switch } from "react-router-dom";
import { Login } from "../pages/Login/Login";
import { TermCondition } from "../pages/TermCondition";
import { PublicRoute } from "../component/PublicRoute";
import { PrivateRoute } from "../component/PrivateRoute";
import { App } from "../pages/App/App";

// Login Bank
import { LoginBankMandiri } from "../pages/LoginBankMandiri";

export const MainRoutes = (props) => {
    return (
        <Switch>
            <Route path="/" exact>
                <Redirect to={"/app/home"} />
            </Route>
            <PublicRoute restricted={true} component={Login} path="/login" exact />
            <PublicRoute restricted={true} component={TermCondition} path="/term-condition" exact />

            {/* Login Bank */}
            <PublicRoute restricted={false} component={LoginBankMandiri} path="/login/mandiri" exact />

            <PublicRoute component={App} path="/app" />
        </Switch>
    );
};
