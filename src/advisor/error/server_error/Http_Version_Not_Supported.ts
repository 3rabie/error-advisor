import { StatusCode } from "../../enum/StatusCode";

export default class Http_Version_Not_Supported extends Error {

    constructor(msg?: string) {
        msg = msg || "Request cannot be fulfilled - HTTP protocol version is not supported.";
        super(msg);
        this.name = "Http Version Not Supported";
        Object.defineProperty(this, 'status', { value: StatusCode.HTTP_VERSION_NOT_SUPPORTED });
        Object.defineProperty(this, 'type', { value: this });
        Object.defineProperty(this, 'timestamp', { value: +new Date() });
    }
}