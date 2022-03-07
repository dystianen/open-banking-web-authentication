import { computed, observable, action } from "mobx";
import { http } from "../utils/http";
import * as qs from 'querystring';
import { appConfig } from "../config/app";

export class BaseStore {
    @observable baseUrl = '/';
    @observable data = [];
    @observable maxLength = [];
    @observable detail = {};
    @observable isLoading = true;

    @observable query = {
        page: 1,
        pageSize: 10,
        sort: 'created_at',
        sortBy: 'DESC',
    }

    keyAccessor = {
        data: 'data'
    }

    constructor(context) {
        this.context = context
    }

    tempData = {};

    @action
    setTempData(value) {
        this.tempData = value;
    }

    @action
    async getAll(filter, sort, append = false) {
        this.isLoading = true
        let newQuery
        if (filter) {
            newQuery = {
                ...this.query,
                ...filter,
            }
        }
        return http.get(this.baseUrl + '?' + qs.stringify(newQuery))
            .then(res => {
                this.isLoading = false
                if (append) {
                    this.data = [...this.data, ...res.body[this.keyAccessor.data]]
                    this.maxLength = res.body[this.keyAccessor.data].total_data
                } else {
                    this.data = res.body[this.keyAccessor.data]
                    this.maxLength = res.body[this.keyAccessor.data].total_data
                }

                return res
            })
            .catch(err => {
                this.isLoading = false
                throw err
            })
    }

    @action
    async getDetail(id) {
        this.isLoading = true

        return http.get(`${this.baseUrl}/${id}`)
            .then(res => {
                this.isLoading = false
                this.detail = res.body
                return res
            })
            .catch(err => {
                this.isLoading = false
                throw err
            })
    }

    @action
    async create(data) {
        return http.post(this.baseUrl)
            .send(data)
    }

    @action
    async update(id, data) {
        return http.put(`${this.baseUrl}/${id}`)
            .send(data)
    }

    @action
    async delete(id) {
        return http.del(`${this.baseUrl}/${id}`)
    }

    @action
    async export(data) {
        let pageSize = data.length;
        let sort = [this.sort];
        return http.post(this.baseUrl + '/export')
            .send({
                pageSize,
                sort,
                "ids": data
            })
            .then(res => {
                window.open(appConfig.apiUrl + res.body.path);
            })
    }
}
