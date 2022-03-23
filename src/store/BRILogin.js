import {http, httpBilling} from "../utils/http";

export class BRILogin {

    constructor(context) {
        this.context = context;
    }

    async login(data) {
        const res = await http.post('/middleware/authentication/bri').send(data);
        return res;
    }

    async instructions(id) {
        const res = await httpBilling.get(`/setting/institution/${id}`);
        return res;
    }

    logout() {
        this.context.setToken('');
        localStorage.removeItem('access_token');
    }
}
