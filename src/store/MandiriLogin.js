import {makeAutoObservable} from "mobx";
import {http, httpBilling} from "../utils/http";

export class MandiriLogin {
    constructor(context) {
        this.context = context;
        makeAutoObservable(this)
    }

    data = [];
    detail = [];

    async getData(id) {
        const res = await httpBilling.get(`/settings/institution/${id}`);
        return res.body
    }

    async postLoginSandbox(data) {
        return await http.post(`/sandbox/authentication/mandiri`).send(data)
    }

    async postLogin(data) {
        return await http.post(`/middleware/authentication/mandiri`).send(data)
    }

}
