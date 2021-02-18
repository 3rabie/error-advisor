import { StatusCode } from "../../enum/StatusCode";

export default class Bad_Request extends Error {
    status: StatusCode;
    type: string;
    timestamp: number;

    constructor(msg?: string) {
        msg = msg || "Request cannot be fulfilled - Malformed request syntax.";
        super(msg);
        this.name = "Bad Request";
        this.status = StatusCode.BAD_REQUEST;
        this.type = this.name;
        this.timestamp = +new Date();
    }
}