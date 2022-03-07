import { computed, observable } from "mobx";
import { UI } from "./ui";
import { Authentication } from "./authentication";
import { TestMemberNonBaseStore } from "./TestMemberNonBaseStore";
import { TestMemberBaseStore } from "./TestMemberBaseStore";

export class Store {
    @observable
    accessToken = '';

    @observable
    refreshToken = '';

    ui = new UI(this);
    authentication = new Authentication(this);
    test_member_basestore = new TestMemberBaseStore(this);
    test_member_nonbasestore = new TestMemberNonBaseStore(this);

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
