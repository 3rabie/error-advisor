import { StatusCode } from "../../enum/StatusCode";

export default class Forbidden extends Error {
    statusCode: StatusCode;
    type: string;
    timestamp: number;

    constructor(message?: string) {
        message = message || "Request cannot be fulfilled - You are not allowed for this operation.";
        super(message);
        this.name = "Forbidden";
        this.statusCode = StatusCode.FORBIDDEN;
        this.type = this.name;
        this.timestamp = +new Date();
    }
}