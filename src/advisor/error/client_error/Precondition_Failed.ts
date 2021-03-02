import { StatusCode } from "../../enum/StatusCode";

export default class Precondition_Failed extends Error {
    statusCode: StatusCode;
    type: string;
    timestamp: number;

    constructor(message?: string) {
        message = message || "Request cannot be fulfilled - The precondition given in the request evaluated to false.";
        super(message);
        this.name = "Precondition Failed";
        this.statusCode = StatusCode.PRECONDITION_FAILED;
        this.type = this.name;
        this.timestamp = +new Date();
    }
}