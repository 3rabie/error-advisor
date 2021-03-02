import { StatusCode } from "../../enum/StatusCode";

export default class Http_Version_Not_Supported extends Error {
    statusCode: StatusCode;
    type: string;
    timestamp: number;

    constructor(message?: string) {
        message = message || "Request cannot be fulfilled - HTTP protocol version is not supported.";
        super(message);
        this.name = "Http Version Not Supported";
        this.statusCode = StatusCode.HTTP_VERSION_NOT_SUPPORTED;
        this.type = this.name;
        this.timestamp = +new Date();
    }
}