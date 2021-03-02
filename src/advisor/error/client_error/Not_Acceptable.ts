import { StatusCode } from "../../enum/StatusCode";

export default class Not_Acceptable extends Error {
    statusCode: StatusCode;
    type: string;
    timestamp: number;

    constructor(message?: string) {
        message = message || "Request cannot be fulfilled - Response generated is not supported from the client.";
        super(message);
        this.name = "Not Acceptable";
        this.statusCode = StatusCode.NOT_ACCEPTABLE;
        this.type = this.name;
        this.timestamp = +new Date();
    }
}