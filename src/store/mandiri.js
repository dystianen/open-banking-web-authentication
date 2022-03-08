import {action, observable} from "mobx";
import {http} from "../utils/http";

export class MandiriStore {
    @observable data = [];
    @observable detail = [];

    constructor(context) {
        this.context = context;
    }

    @action
    async getData(id) {
        const res = await http.get(`/config/institution/${id}`);
        return res.body
    }

    @action
    async postLogin(data) {
        await http.post(``).send(data)
        await this.getData();
    }

}
