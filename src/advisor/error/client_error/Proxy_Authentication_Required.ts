import { StatusCode } from "../../enum/StatusCode";

export default class Proxy_Authentication_Required extends Error {
    statusCode: StatusCode;
    type: string;
    timestamp: number;

    constructor(message?: string) {
        message = message || "Request cannot be fulfilled - The client must first authenticate itself with the proxy.";
        super(message);
        this.name = "Proxy Authentication Required";
        this.statusCode = StatusCode.PROXY_AUTHENTICATION_REQUIRED;
        this.type = this.name;
        this.timestamp = +new Date();
    }
}