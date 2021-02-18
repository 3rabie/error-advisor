import { StatusCode } from "../../enum/StatusCode";

export default class Length_Required extends Error {

    constructor(msg?: string) {
        msg = msg || "Request cannot be fulfilled - The `Content-Length` is not defined.";
        super(msg);
        this.name = "Length Required";
        Object.defineProperty(this, 'status', { value: StatusCode.LENGTH_REQUIRED });
        Object.defineProperty(this, 'type', { value: this });
        Object.defineProperty(this, 'timestamp', { value: +new Date() });
    }
}