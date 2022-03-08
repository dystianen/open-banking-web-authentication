import { http } from "../utils/http";

export class BNILogin {

    constructor(context) {
        this.context = context;
    }

    async login(data) {
        const res = await http.post('login/bni').send(data);
        return res;
    }

    async institution(id) {
        const res = await http.get(`/config/institution/${id}`);
        return res;
    }

    logout() {
        this.context.setToken('');
        localStorage.removeItem('access_token');
    }
}
