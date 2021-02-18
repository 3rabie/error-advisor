import { StatusCode } from "../../enum/StatusCode";

export default class Gateway_Timeout extends Error {

    constructor(msg?: string) {
        msg = msg || "Request cannot be fulfilled - Gateway timeout.";
        super(msg);
        this.name = "Gateway Timeout";
        Object.defineProperty(this, 'status', { value: StatusCode.GATEWAY_TIMEOUT });
        Object.defineProperty(this, 'type', { value: this });
        Object.defineProperty(this, 'timestamp', { value: +new Date() });
    }
}