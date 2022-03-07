import { BaseStore } from "./base_store";

export class TestMemberBaseStore extends BaseStore {
    constructor(context) {
        super(context);
        this.baseUrl = '/member';
    }
}