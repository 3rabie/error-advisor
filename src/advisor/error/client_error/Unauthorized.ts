import { StatusCode } from "../../enum/StatusCode";

export default class Unauthorized extends Error {
    statusCode: StatusCode;
    type: string;
    timestamp: number;

    constructor(message?: string) {
        message = message || "Request cannot be fulfilled - Request requires user authentication.";
        super(message);
        this.name = "Unauthorized";
        this.statusCode = StatusCode.UNAUTHORIZED;
        this.type = this.name;
        this.timestamp = +new Date();
    }
}