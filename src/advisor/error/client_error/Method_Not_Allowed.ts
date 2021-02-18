import { StatusCode } from "../../enum/StatusCode";

export default class Method_Not_Allowed extends Error {

    constructor(msg?: string) {
        msg = msg || "Request cannot be fulfilled - Requested http method is not supported.";
        super(msg);
        this.name = "Method Not Allowed";
        Object.defineProperty(this, 'status', { value: StatusCode.METHOD_NOT_ALLOWED });
        Object.defineProperty(this, 'type', { value: this });
        Object.defineProperty(this, 'timestamp', { value: +new Date() });
    }
}