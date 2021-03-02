import { StatusCode } from "../../enum/StatusCode";

export default class Insufficient_Storage extends Error {
    statusCode: StatusCode;
    type: string;
    timestamp: number;

    constructor(message?: string) {
        message = message || "Request cannot be fulfilled - Cannot store the representation needed to complete the request.";
        super(message);
        this.name = "Insufficient Storage";
        this.statusCode = StatusCode.INSUFFICIENT_STORAGE;
        this.type = this.name;
        this.timestamp = +new Date();
    }
}