import { Redirect, Route, Switch } from "react-router-dom";
import { Login } from "../pages/Login/Login";
import { TermCondition } from "../pages/TermCondition";
import { PublicRoute } from "../component/PublicRoute";
// import { PrivateRoute } from "../component/PrivateRoute";
import { App } from "../pages/App/App";
import { LoginBNI } from "../pages/Login/LoginBNI";
import { Bca } from "../pages/Bca";
import { Otp } from "../pages/Otp";
import { LoginMandiri } from "../pages/Login/LoginMandiri";
import { BankList } from "../pages/BankList";

// Test
import { TestLogin } from "../pages/TestMobx/Login";
import { TestMember } from "../pages/TestMobx/Member";
import { TestMemberDetail } from "../pages/TestMobx/MemberDetail";

export const MainRoutes = (props) => {
  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to={"/app/home"} />
      </Route>

      <PublicRoute restricted={true} component={Login} path="/login" exact />

      <PublicRoute
        restricted={true}
        component={TermCondition}
        path="/term-condition"
        exact
      />

      {/* Login Bank */}
      <PublicRoute
        restricted={false}
        component={LoginMandiri}
        path="/mandiri-login"
        exact
      />

      <PublicRoute
        restricted={false}
        component={LoginBNI}
        path="/bni-login"
        exact
      />

      <PublicRoute restricted={false} component={Bca} path="/bca" exact />
      <PublicRoute restricted={false} component={Otp} path="/otp" exact />
      <PublicRoute restricted={true} component={BankList} path="/bank-list" exact />
      <PublicRoute component={App} path="/app" />

      {/* Test */}
      <PublicRoute restricted={false} component={TestLogin} path="/test/login" exact />
      <PublicRoute restricted={false} component={TestMember} path="/test/member" exact />
      <PublicRoute restricted={false} component={TestMemberDetail} path="/test/member/:id" exact />

    </Switch>
  );
};
