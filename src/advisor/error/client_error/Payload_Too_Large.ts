import { StatusCode } from "../../enum/StatusCode";

export default class Payload_Too_Large extends Error {
    statusCode: StatusCode;
    type: string;
    timestamp: number;

    constructor(message?: string) {
        message = message || "Request cannot be fulfilled - Request entity is larger than limits defined by server.";
        super(message);
        this.name = "Payload Too Large";
        this.statusCode = StatusCode.PAYLOAD_TOO_LARGE;
        this.type = this.name;
        this.timestamp = +new Date();
    }
}