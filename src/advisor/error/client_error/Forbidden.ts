import { StatusCode } from "../../enum/StatusCode";

export default class Forbidden extends Error {

    constructor(msg?: string) {
        msg = msg || "Request cannot be fulfilled - You are not allowed for this operation.";
        super(msg);
        this.name = "Forbidden";
        Object.defineProperty(this, 'status', { value: StatusCode.FORBIDDEN });
        Object.defineProperty(this, 'type', { value: this });
        Object.defineProperty(this, 'timestamp', { value: +new Date() });
    }
}