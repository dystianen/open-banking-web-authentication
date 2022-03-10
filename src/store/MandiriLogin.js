import {makeAutoObservable} from "mobx";
import {http} from "../utils/http";

export class MandiriLogin {
    constructor(context) {
        this.context = context;
        makeAutoObservable(this)
    }

    data = [];
    detail = [];

    async getData(id) {
        const res = await http.get(`/config/institution/${id}`);
        return res.body
    }

    async postLogin(data) {
        return await http.post(`/middleware/authentication/mandiri`).send(data)
    }

}
