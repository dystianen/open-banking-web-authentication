import { action, observable } from "mobx";
import { http } from "../utils/http";

export class InitialStore {
    @observable baseUrl = '/';
    @observable data = [];
    @observable detail = [];

    constructor(context) {
        this.context = context;
    }

    @action
    async getAll() {
        const res = await http.get(this.baseUrl);
        return res;
    }

    @action
    async getDetail(id) {
        const res = await http.get(`${this.baseUrl}/${id}`);
        return res;
    }

    @action
    async create(data) {
        await http.post(this.baseUrl).send(data)
        this.getAll();
    }

    @action
    async update(data) {
        await http.put(this.baseUrl).send(data)
        this.getAll();
    }

}
