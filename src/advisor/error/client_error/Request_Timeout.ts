import { StatusCode } from "../../enum/StatusCode";

export default class Request_Timeout extends Error {

    constructor(msg?: string) {
        msg = msg || "Request cannot be fulfilled - Request timeout";
        super(msg);
        this.name = "Request Timeout";
        Object.defineProperty(this, 'status', { value: StatusCode.REQUEST_TIMEOUT });
        Object.defineProperty(this, 'type', { value: this });
        Object.defineProperty(this, 'timestamp', { value: +new Date() });
    }
}