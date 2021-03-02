import { StatusCode } from "../../enum/StatusCode";

export default class Internal_Server_Error extends Error {
    statusCode: StatusCode;
    type: string;
    timestamp: number;

    constructor(message?: string) {
        message = message || "Request cannot be fulfilled - Internal server error.";
        super(message);
        this.name = "Internal Server Error";
        this.statusCode = StatusCode.INTERNAL_SERVER_ERROR;
        this.type = this.name;
        this.timestamp = +new Date();
    }
}