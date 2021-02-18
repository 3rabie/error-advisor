import { StatusCode } from "../../enum/StatusCode";

export default class Network_Authentication_Required extends Error {

    constructor(msg?: string) {
        msg = msg || "Request cannot be fulfilled -  Authenticate is required to gain network access.";
        super(msg);
        this.name = "Network Authentication Required";
        Object.defineProperty(this, 'status', { value: StatusCode.NETWORK_AUTHENTICATION_REQUIRED });
        Object.defineProperty(this, 'type', { value: this });
        Object.defineProperty(this, 'timestamp', { value: +new Date() });
    }
}