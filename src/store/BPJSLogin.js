import {makeAutoObservable} from "mobx";
import {http, httpBilling} from "../utils/http";

export class BPJSLogin {
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
        return await http.post(`/sandbox/authentication/bpjs`).send(data)
    }

    async postLogin(data) {
        return await http.post(`/middleware/authentication/bpjs`).send(data)
    }

    async checkStatus(data) {
        return await http.post(`/middleware/authentication/check-status`).send(data)
    }
}
