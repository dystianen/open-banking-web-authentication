import {http, httpBilling} from "../utils/http";

export class BNILogin {

    constructor(context) {
        this.context = context;
    }

    async loginSandbox(data) {
        const res = await http.post('/sandbox/authentication/bni').send(data);
        return res;
    }

    async login(data) {
        const res = await http.post('/middleware/authentication/bni').send(data);
        return res;
    }

    async institution(id) {
        const res = await httpBilling.get(`/settings/institution/${id}`);
        return res;
    }

    logout() {
        this.context.setToken('');
        localStorage.removeItem('access_token');
    }
}
