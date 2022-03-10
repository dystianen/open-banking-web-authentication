import { makeAutoObservable } from "mobx";
import { http } from "../utils/http";

export class ListBank {
    baseUrl = '/config/institution/category/all?page=0&pageSize=10';
    data = [];
    detail = [];

    constructor(context) {
        this.context = context;
        makeAutoObservable(this)
    }

    async getAllBanks() {
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
