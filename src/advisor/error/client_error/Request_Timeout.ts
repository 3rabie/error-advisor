import { StatusCode } from "../../enum/StatusCode";

export default class Request_Timeout extends Error {
    statusCode: StatusCode;
    type: string;
    timestamp: number;

    constructor(message?: string) {
        message = message || "Request cannot be fulfilled - Request timeout";
        super(message);
        this.name = "Request Timeout";
        this.statusCode = StatusCode.REQUEST_TIMEOUT;
        this.type = this.name;
        this.timestamp = +new Date();
    }
}