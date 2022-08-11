import {http, httpBilling} from "../utils/http";

export class BCALogin {

    constructor(context) {
        this.context = context;
    }

    async loginSandbox(data) {
        const res = await http.post('/sandbox/authentication/bca').send(data);
        return res;
    }

    async login(data) {
        const res = await http.post('/middleware/authentication/bca').send(data);
        return res;
    }

    async institution(id) {
        const res = await httpBilling.get(`/setting/institution/${id}`);
        return res;
    }

    async getProduct(type, data) {
        const res = await http.post(`/middleware/account/${type}`).send(data);
        return res;
    }
}
