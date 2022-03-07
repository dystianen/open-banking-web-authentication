import { action, observable } from "mobx";
import { http } from "../utils/http";
import { message } from "antd";
import qs from "querystring";

export class TestMemberNonBaseStore {
    @observable baseUrl = '/member';
    @observable data = [];
    @observable detail = [];

    @observable maxLength = [];
    @observable query = {
        page: 1,
        pageSize: 10,
        sort: 'created_at',
        sortBy: 'DESC',
    }

    constructor(context) {
        this.context = context;
    }

    @action
    async getAll(url) {
        this.isLoading = true;
        return http.get(`${url}`)
            .then((res) => {
                this.isLoading = false;
                this.data = res.body.data;
                return res;
            })
            .catch((err) => {
                this.isLoading = false;
                throw err;
            })
    }

    @action
    async getDetail(id) {
        this.isLoading = true;

        return http.get(`${this.baseUrl}/${id}`)
            .then(res => {
                this.isLoading = false
                this.detail = res.body.results;
                return res
            })
            .catch(err => {
                this.isLoading = false
                throw err
            })
    }

    @action
    async create(data) {
        this.isLoading = true;

        return http.post(this.baseUrl)
            .send(data)
            .then(res => {
                this.isLoading = false
                return res
            })
            .catch(err => {
                this.isLoading = false
                throw err
            });
    }

    @action
    async update(data) {
        this.isLoading = true;

        return http.put(this.baseUrl + '/status')
            .send(data)
            .then(res => {
                this.isLoading = false
                return res
            })
            .catch(err => {
                this.isLoading = false
                throw err
            });
    }

}
