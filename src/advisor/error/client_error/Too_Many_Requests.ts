import { StatusCode } from "../../enum/StatusCode";

export default class Too_Many_Requests extends Error {

    constructor(msg?: string) {
        msg = msg || "Request cannot be fulfilled - Client has sent too many request.";
        super(msg);
        this.name = "Too Many Requests";
        Object.defineProperty(this, 'status', { value: StatusCode.TOO_MANY_REQUESTS });
        Object.defineProperty(this, 'type', { value: this });
        Object.defineProperty(this, 'timestamp', { value: +new Date() });
    }
}