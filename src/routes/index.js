import {Redirect, Route, Switch, useLocation, useParams} from "react-router-dom";
import {Login} from "../pages/Login/Login";
import {TermCondition} from "../pages/TermCondition";
import {PublicRoute} from "../component/PublicRoute";
// import { PrivateRoute } from "../component/PrivateRoute";
import {App} from "../pages/App/App";
import {LoginBNI} from "../pages/LoginBNI";
import {LoginBCA} from "../pages/LoginBCA";
import {Otp} from "../pages/Otp";
import {LoginMandiri} from "../pages/LoginMandiri";
import {LoginTokopedia} from "../pages/OtpTokopedia";
import {OtpTokopedia} from "../pages/OtpTokopedia/Component/index";
import {BankList} from "../pages/BankList";
import {Success} from "../pages/Success";

// Test
import {TestLogin} from "../pages/TestMobx/Login";
import {TestMember} from "../pages/TestMobx/Member";
import {TestMemberDetail} from "../pages/TestMobx/MemberDetail";
import {LoginBRI} from "../pages/LoginBRI";
import {ChooseWay} from "../pages/ChooseWay";
import React, {useEffect} from "react";
import queryString from "querystring";
import {LoginGojek} from "../pages/OtpGojek";
import {OtpGojek} from "../pages/OtpGojek/Component/index";
import {LoginOVO} from "../pages/OtpOVO";
import {OtpOVO} from "../pages/OtpOVO/Component";
import {LoginShopee} from "../pages/OtpShopee";
import {OtpShopee} from "../pages/OtpShopee/Component";

export const MainRoutes = (props) => {
    const {search} = useLocation();

    let deleteFirstCharacter = search.substr(1) // Delete character ?
    const query = queryString.parse(deleteFirstCharacter)

    useEffect(() => {
        localStorage.setItem('customer_ref_id', query.customer_ref_id);
        localStorage.setItem('customer_name', query.customer_name);
        localStorage.setItem('access_token', query.accessToken);
        localStorage.setItem('userID', query.userId);
        localStorage.setItem('type', query.type)
    }, [search])
    return (
        <Switch>
            <Route path="/" exact>
                <Redirect to={"/term-condition"}/>
            </Route>

            <PublicRoute restricted={true} component={Login} path="/login" exact/>

            <PublicRoute
                restricted={true}
                component={TermCondition}
                path="/term-condition"
                exact
            />

            <PublicRoute
                restricted={true}
                component={ChooseWay}
                path="/choose-way"
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

            <PublicRoute
                restricted={false}
                component={LoginBCA}
                path="/bca-login"
                exact
            />

            <PublicRoute
                restricted={false}
                component={LoginBRI}
                path="/bri-login"
                exact
            />

            <PublicRoute
                restricted={false}
                component={LoginTokopedia}
                path="/tokopedia-login"
                exact
            />

            <PublicRoute
                restricted={false}
                component={OtpTokopedia}
                path="/tokopedia-otp"
                exact
            />

            <PublicRoute
                restricted={false}
                component={LoginGojek}
                path="/gojek-login"
                exact
            />

            <PublicRoute
                restricted={false}
                component={OtpGojek}
                path="/gojek-otp"
                exact
            />

            <PublicRoute
                restricted={false}
                component={LoginOVO}
                path="/ovo-login"
                exact
            />

            <PublicRoute
                restricted={false}
                component={OtpOVO}
                path="/ovo-otp"
                exact
            />

            <PublicRoute
                restricted={false}
                component={LoginShopee}
                path="/shopee-login"
                exact
            />

            <PublicRoute
                restricted={false}
                component={OtpShopee}
                path="/shopee-otp"
                exact
            />

            {/* Success Pages */}
            <PublicRoute
                restricted={false}
                path="/bca-success"
                exact
            >
                <Success message={"klikBCA"}/>
            </PublicRoute>

            <PublicRoute
                restricted={false}
                path="/bni-success"
                exact
            >
                <Success message={"BNI"}/>
            </PublicRoute>

            <PublicRoute
                restricted={false}
                path="/bri-success"
                exact
            >
                <Success message={"BRI"}/>
            </PublicRoute>

            <PublicRoute
                restricted={false}
                path="/mandiri-success"
                exact
            >
                <Success message={"Livin' by Mandiri"}/>
            </PublicRoute>

            <PublicRoute
                restricted={false}
                path="/tokopedia-success"
                exact
            >
                <Success message={"Tokopedia"}/>
            </PublicRoute>

            <PublicRoute
                restricted={false}
                path="/gojek-success"
                exact
            >
                <Success message={"Gojek"}/>
            </PublicRoute>

            <PublicRoute
                restricted={false}
                path="/ovo-success"
                exact
            >
                <Success message={"OVO"}/>
            </PublicRoute>

            <PublicRoute
                restricted={false}
                path="/shopee-success"
                exact
            >
                <Success message={"SHOPEE"}/>
            </PublicRoute>
            {/* End OfSuccess Pages */}

            <PublicRoute
                restricted={false} component={Otp} path="/otp" exact
            /><PublicRoute
            restricted={true}
            component={BankList}
            path="/bank-list"
            exact
        />
            <PublicRoute component={App} path="/app"/>

            {/* Test */}
            <PublicRoute
                restricted={false}
                component={TestLogin}
                path="/test/login"
                exact
            />
            <PublicRoute
                restricted={false}
                component={TestMember}
                path="/test/member"
                exact
            />
            <PublicRoute
                restricted={false}
                component={TestMemberDetail}
                path="/test/member/:id"
                exact
            />
        </Switch>
    );
};
