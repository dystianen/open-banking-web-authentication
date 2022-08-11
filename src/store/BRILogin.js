import {http, httpBilling} from "../utils/http";

export class BRILogin {

    constructor(context) {
        this.context = context;
    }

    async loginSandbox(data) {
        const res = await http.post('/sandbox/authentication/bri').send(data);
        return res;
    }

    async login(data) {
        const res = await http.post('/middleware/authentication/bri').send(data);
        return res;
    }

    async instructions(id) {
        const res = await httpBilling.get(`/setting/institution/${id}`);
        return res;
    }

    async getProduct(type, data) {
        const res = await http.post(`/middleware/account/${type}`).send(data);
        return res;
    }
}
