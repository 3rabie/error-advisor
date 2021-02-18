import { StatusCode } from "../../enum/StatusCode";

export default class Bad_Gateway extends Error {

    constructor(msg?: string) {
        msg = msg || "Request cannot be fulfilled - Bad gateway.";
        super(msg);
        this.name = "Bad Gateway";
        Object.defineProperty(this, 'status', { value: StatusCode.BAD_REQUEST });
        Object.defineProperty(this, 'type', { value: this });
        Object.defineProperty(this, 'timestamp', { value: +new Date() });
    }
}