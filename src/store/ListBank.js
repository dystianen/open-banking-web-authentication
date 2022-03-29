import { makeAutoObservable } from "mobx";
import {http, httpBilling} from "../utils/http";

export class ListBank {
    baseUrl = '/setting/institution/category/all';
    data = [];
    detail = [];

    constructor(context) {
        this.context = context;
        makeAutoObservable(this)
    }

    async getAllBanks(id, userId) {
        const res = await httpBilling.get(this.baseUrl + `/customer?page=1&pageSize=10&customerId=${id}&userId=${userId}`);
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
