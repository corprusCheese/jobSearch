import {HhHandler} from "@/classes/Handlers/implementations/HhHandler";
import {GenmatHandler} from "@/classes/Handlers/implementations/GenmatHandler";

export class HandlerFactory {
    make(type) {
        let handler;
        switch (type){
            case "hh":
                handler = new HhHandler();
                break;
            case "genmat":
                handler = new GenmatHandler();
                break;
        }

        return handler;
    }
}