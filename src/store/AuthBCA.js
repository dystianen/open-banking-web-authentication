import { action, observable, computed } from "mobx";
import { http } from "../utils/http";

export class AuthBCA {
    @observable email = '';
    @observable profile = {};
    @observable dataUser = '';
    @observable dataUserID = '';

    constructor(context) {
        this.context = context;
    }

    @computed
    get userData() {
        if (!this.context.accessToken) {
            return {
                id: '',
                role: '',
                email: '',
                fullname: '',
                phone_number: ''

            };
        }
        return JSON.parse(atob(this.context.accessToken.split('.')[1]));
    }

    @action
    async login({ email, password }) {
        await http.post('/authorization/login').send({
            email,
            password,

        }).then((res) => {
            this.context.setToken(res.body.token, '')
            this.dataUser = res.body.user.role;
            localStorage.setItem('role', res.body.user.role);
            return res
        }).catch((e) => {
            throw e
        })
    }

    @action
    logout() {
        this.context.setToken('');
        localStorage.removeItem('role');
    }

}
