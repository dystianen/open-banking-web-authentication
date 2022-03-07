import { computed, observable } from "mobx";
import { UI } from "./ui";
import { Authentication } from "./authentication";

export class Store {
    @observable
    accessToken = '';

    @observable
    refreshToken = '';

    ui = new UI(this);
    authentication = new Authentication(this);

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
