import { StatusCode } from "../../enum/StatusCode";

export default class Too_Early extends Error {
    statusCode: StatusCode;
    type: string;
    timestamp: number;

    constructor(message?: string) {
        message = message || "Request cannot be fulfilled - Potential risk for a replay attack";
        super(message);
        this.name = "Too Early";
        this.statusCode = StatusCode.TOO_EARLY;
        this.type = this.name;
        this.timestamp = +new Date();
    }
}