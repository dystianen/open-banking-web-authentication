import {makeAutoObservable} from "mobx";
import {http, httpBilling} from "../utils/http";

export class OVOLogin {
    constructor(context) {
        this.context = context;
        makeAutoObservable(this)
    }

    data = [];

    async getData(id) {
        const res = await httpBilling.get(`/setting/institution/${id}`);
        return res.body
    }

    async postLoginSandbox(data) {
        return await http.post(`/sandbox/authentication/ovo`).send(data)
    }

    async postLogin(data) {
        return await http.post(`/middleware/authentication/ovo`).send(data)
    }

    async otp(data) {
        return await http.post(`/middleware/authentication/validate-otp`).send(data)
    }
}
