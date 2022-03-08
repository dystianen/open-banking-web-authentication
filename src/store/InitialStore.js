import { action, makeObservable, observable } from "mobx";
import { http } from "../utils/http";

export class InitialStore {

    baseUrl = "";
    data = [];
    detail = [];

    constructor(context) {
        this.context = context;
        makeObservable(this, {
            baseUrl: observable,
            data: observable,
            detail: observable,
            getAll: action,
            getDetail: action,
            create: action,
            update: action,
        })
    }

    async getAll() {
        const res = await http.get(this.baseUrl);
        return res;
    }

    async getDetail(id) {
        const res = await http.get(`${this.baseUrl}/${id}`);
        return res;
    }

    async create(data) {
        await http.post(this.baseUrl).send(data)
        this.getAll();
    }

    async update(data) {
        await http.put(this.baseUrl).send(data)
        this.getAll();
    }

}
