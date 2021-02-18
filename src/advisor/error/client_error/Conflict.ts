import { StatusCode } from "../../enum/StatusCode";

export default class Conflict extends Error {

    constructor(msg?: string) {
        msg = msg || "Request cannot be fulfilled - Resource already exists or in use for another operation.";
        super(msg);
        this.name = "Conflict";
        Object.defineProperty(this, 'status', { value: StatusCode.CONFLICT });
        Object.defineProperty(this, 'type', { value: this });
        Object.defineProperty(this, 'timestamp', { value: +new Date() });
    }
}