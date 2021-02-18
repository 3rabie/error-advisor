import { StatusCode } from "../../enum/StatusCode";

export default class Precondition_Required extends Error {

    constructor(msg?: string) {
        msg = msg || "Request cannot be fulfilled - Request require precondition header.";
        super(msg);
        this.name = "Precondition Required";
        Object.defineProperty(this, 'status', { value: StatusCode.PRECONDITION_REQUIRED });
        Object.defineProperty(this, 'type', { value: this });
        Object.defineProperty(this, 'timestamp', { value: +new Date() });
    }
}