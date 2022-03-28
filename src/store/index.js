import { computed, observable } from "mobx";
import { UI } from "./ui";
import { Authentication } from "./authentication";
import { InitialStore } from "./InitialStore"
import { BNILogin } from "./BNILogin";
import { MandiriLogin } from "./MandiriLogin";
import { ListBank } from "./ListBank";
import { BCALogin } from "./BCALogin";
import {BRILogin} from "./BRILogin";
import {Profile} from './Profile'
// import { AuthBCA } from "./AuthBCA";
// import { BCAInstruction } from "./BCAInstruction";

export class Store {
    @observable
    accessToken = '';

    @observable
    refreshToken = '';

    ui = new UI(this);
    authentication = new Authentication(this);
    initial_store = new InitialStore(this);
    mandiri = new MandiriLogin(this)
    bca_login = new BCALogin(this);
    bni_login = new BNILogin(this);
    bri_login = new BRILogin(this);
    listBank = new ListBank(this);
    profile = new Profile(this)

    @computed
    get isLoggedIn() {
        return !!this.accessToken;
    }

    setInitialToken(accessToken, refreshToken) {
        if (accessToken === 'null') {
            accessToken = null
        }

        if (refreshToken === 'null') {
            refreshToken = null
        }

        this.setToken(accessToken, refreshToken);
    }

    setToken(accessToken, refreshToken) {
        if (accessToken === 'null') {
            accessToken = null;
        }

        if (refreshToken === 'null') {
            refreshToken = null;
        }

        this.accessToken = accessToken;
        this.refreshToken = refreshToken;

        localStorage.setItem("access_token", accessToken);
        localStorage.setItem("refresh_token", refreshToken);
    }
}
