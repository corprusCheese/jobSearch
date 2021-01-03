import {HhHandler} from "@/classes/Handlers/implementations/HhHandler";

export class HandlerFactory {
    make(type) {
        let handler;
        switch (type){
            case "hh":
                handler = new HhHandler();
                break;
        }

        return handler;
    }
}