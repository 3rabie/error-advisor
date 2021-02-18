import { StatusCode } from "../../enum/StatusCode";

export default class Not_Extended extends Error {

    constructor(msg?: string) {
        msg = msg || "Request cannot be fulfilled -  Not Extended.";
        super(msg);
        this.name = "Not Extended";
        Object.defineProperty(this, 'status', { value: StatusCode.NOT_EXTENDED });
        Object.defineProperty(this, 'type', { value: this });
        Object.defineProperty(this, 'timestamp', { value: +new Date() });
    }
}