import { StatusCode } from "../../enum/StatusCode";

export default class NotFound extends Error {

    constructor(msg?: string) {
        msg = msg || "Request cannot be fulfilled - Requested resource could not be fount.";
        super(msg);
        this.name = "Not Found";
        Object.defineProperty(this, 'status', { value: StatusCode.NOT_FOUND });
        Object.defineProperty(this, 'type', { value: this });
        Object.defineProperty(this, 'timestamp', { value: +new Date() });
    }
}