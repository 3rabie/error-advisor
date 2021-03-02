import { StatusCode } from "../../enum/StatusCode";

export default class Bad_Gateway extends Error {
    statusCode: StatusCode;
    type: string;
    timestamp: number;

    constructor(message?: string) {
        message = message || "Request cannot be fulfilled - Bad gateway.";
        super(message);
        this.name = "Bad Gateway";
        this.statusCode = StatusCode.BAD_REQUEST;
        this.type = this.name;
        this.timestamp = +new Date();
    }
}