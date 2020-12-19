import {Handler} from "@/classes/Handlers/Handler";
import axios from "axios";

export class HhHandler extends Handler{
    constructor() {
        super("hh");
        this.url = "https://api.hh.ru"
    }
    sendSearchRequest(url ,text) {
        super.sendSearchRequest();
        axios.get(this.url + url + "?text="+text)
            .then((result) => {
                console.log(result)
            })
    }
}