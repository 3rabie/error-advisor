import { StatusCode } from "../../enum/StatusCode";

export default class Service_Unavailable extends Error {

    constructor(msg?: string) {
        msg = msg || "Request cannot be fulfilled -  The server is currently unavailable.";
        super(msg);
        this.name = "Service Unavailable";
        Object.defineProperty(this, 'status', { value: StatusCode.SERVICE_UNAVAILABLE });
        Object.defineProperty(this, 'type', { value: this });
        Object.defineProperty(this, 'timestamp', { value: +new Date() });
    }
}