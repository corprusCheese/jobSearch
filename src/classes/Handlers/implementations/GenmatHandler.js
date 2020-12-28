import {Handler} from "@/classes/Handlers/Handler";

export class GenmatHandler extends Handler {
    constructor() {
        super("genmat");
        this.url = "https://genmat.blindage.org"
    }

    sendSearchRequest(url, text) {
        super.sendSearchRequest();
        let config = {
            headers: {
                'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*!/!*;q=0.8,application/signed-exchange;v=b3;q=0.9',
                'accept-language': 'en-GB,en;q=0.9',
                'content-type': 'text/html; charset=UTF-8',
                'content-encoding': 'gzip',
                'Access-Control-Request-Method': 'POST',
                'Access-Control-Request-Headers': 'Content-Type',
                'Access-Control-Allow-Origin': 'http://localhost:8080/'
            }
        }
        let data = {text: text}
        return this.axios.post(this.url + url,data, config)
    }
}