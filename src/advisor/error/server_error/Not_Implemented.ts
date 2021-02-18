import { StatusCode } from "../../enum/StatusCode";

export default class Not_Implemented extends Error {

    constructor(msg?: string) {
        msg = msg || "Request cannot be fulfilled -  Request method is not recognized.";
        super(msg);
        this.name = "Not Implemented";
        Object.defineProperty(this, 'status', { value: StatusCode.NOT_IMPLEMENTED });
        Object.defineProperty(this, 'type', { value: this });
        Object.defineProperty(this, 'timestamp', { value: +new Date() });
    }
}