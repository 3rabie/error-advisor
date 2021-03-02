import { StatusCode } from "../../enum/StatusCode";

export default class Precondition_Required extends Error {
    statusCode: StatusCode;
    type: string;
    timestamp: number;

    constructor(message?: string) {
        message = message || "Request cannot be fulfilled - Request require precondition header.";
        super(message);
        this.name = "Precondition Required";
        this.statusCode = StatusCode.PRECONDITION_REQUIRED;
        this.type = this.name;
        this.timestamp = +new Date();
    }
}