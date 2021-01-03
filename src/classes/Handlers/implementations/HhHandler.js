import {Handler} from "@/classes/Handlers/Handler";

export class HhHandler extends Handler {
    constructor() {
        super("hh");
        this.url = "https://api.hh.ru"
    }

    sendSearchRequest({url, text}) {
        super.sendSearchRequest();
        return this.axios.get(this.url + url + "?text=" + text)
    }
}