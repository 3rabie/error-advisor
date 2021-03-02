import { StatusCode } from "../../enum/StatusCode";

export default class Upgrade_Required extends Error {
    statusCode: StatusCode;
    type: string;
    timestamp: number;

    constructor(message?: string) {
        message = message || "Request cannot be fulfilled - Current protocol is not supported.";
        super(message);
        this.name = "Upgrade Required";
        this.statusCode = StatusCode.UPGRAFE_REQUIRED;
        this.type = this.name;
        this.timestamp = +new Date();
    }
}