import { StatusCode } from "../../enum/StatusCode";

export default class Gone extends Error {
    statusCode: StatusCode;
    type: string;
    timestamp: number;

    constructor(message?: string) {
        message = message || "Request cannot be fulfilled - Resource has been removed and\or no longer available.";
        super(message);
        this.name = "Gone";
        this.statusCode = StatusCode.GONE;
        this.type = this.name;
        this.timestamp = +new Date();
    }
}