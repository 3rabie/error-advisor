import { StatusCode } from "../../enum/StatusCode";

export default class URI_Too_Long extends Error {
    statusCode: StatusCode;
    type: string;
    timestamp: number;

    constructor(message?: string) {
        message = message || "Request cannot be fulfilled - URL is too long.";
        super(message);
        this.name = "URI Too Long";
        this.statusCode = StatusCode.URI_TOO_LONG;
        this.type = this.name;
        this.timestamp = +new Date();
    }
}