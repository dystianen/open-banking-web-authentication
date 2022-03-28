import { makeAutoObservable } from "mobx";
import {httpBilling} from "../utils/http";

export class Profile {
    baseUrl = '/auth-service/users';

    constructor(context) {
        this.context = context;
        makeAutoObservable(this)
    }

    async getProfile() {
        const res = await httpBilling.get(this.baseUrl + `/profile`);
        return res;
    }

}
