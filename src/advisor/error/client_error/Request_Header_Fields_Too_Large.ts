import { StatusCode } from "../../enum/StatusCode";

export default class Request_Header_Fields_Too_Large extends Error {
    statusCode: StatusCode;
    type: string;
    timestamp: number;

    constructor(message?: string) {
        message = message || "Request cannot be fulfilled - HTTP headers are too long.";
        super(message);
        this.name = "Request Header Fields Too Large";
        this.statusCode = StatusCode.REQUEST_HEADER_FIELDS_TOO_LARGE;
        this.type = this.name;
        this.timestamp = +new Date();
    }
}