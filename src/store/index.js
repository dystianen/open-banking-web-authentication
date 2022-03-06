import {observable, computed} from "mobx";
import {UI} from "./ui";
import {Authentication} from "./authentication";

export class Store {
    ui = new UI(this);
    authentication = new Authentication(this);

    constructor() {
    }
}
