import axios from "axios";

export class Handler {
    constructor(type) {
        this.type = type;
        this.url = ""
        this.axios = axios;
    }

    sendSearchRequest() { }
}