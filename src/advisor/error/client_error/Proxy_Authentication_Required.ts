import { StatusCode } from "../../enum/StatusCode";

export default class Proxy_Authentication_Required extends Error {

    constructor(msg?: string) {
        msg = msg || "Request cannot be fulfilled - The client must first authenticate itself with the proxy.";
        super(msg);
        this.name = "Proxy Authentication Required";
        Object.defineProperty(this, 'status', { value: StatusCode.PROXY_AUTHENTICATION_REQUIRED });
        Object.defineProperty(this, 'type', { value: this });
        Object.defineProperty(this, 'timestamp', { value: +new Date() });
    }
}