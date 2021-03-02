import { StatusCode } from "../../enum/StatusCode";

export default class I_Am_A_Teapot extends Error {
    statusCode: StatusCode;
    type: string;
    timestamp: number;

    constructor(message?: string) {
        message = message || "Request cannot be fulfilled - Cannot handle the request at the meantime.";
        super(message);
        this.name = "I'am A Teapot";
        this.statusCode = StatusCode.I_AM_A_TEAPOT;
        this.type = this.name;
        this.timestamp = +new Date();
    }
}