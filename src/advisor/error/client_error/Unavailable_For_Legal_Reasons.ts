import { StatusCode } from "../../enum/StatusCode";

export default class Unavailable_For_Legal_Reasons extends Error {
    statusCode: StatusCode;
    type: string;
    timestamp: number;

    constructor(message?: string) {
        message = message || "Request cannot be fulfilled - Requested resource is not available due to legal reasons.";
        super(message);
        this.name = "Unavailable For Legal Reasons";
        this.statusCode = StatusCode.UNAVAILABLE_FOR_LEGAL_REASONS;
        this.type = this.name;
        this.timestamp = +new Date();
    }
}