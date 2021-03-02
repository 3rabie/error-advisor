import { StatusCode } from "../../enum/StatusCode";

export default class Method_Not_Allowed extends Error {
    statusCode: StatusCode;
    type: string;
    timestamp: number;

    constructor(message?: string) {
        message = message || "Request cannot be fulfilled - Requested http method is not supported.";
        super(message);
        this.name = "Method Not Allowed";
        this.statusCode = 
        Object.defineProperty(this, 'status', { value: StatusCode.METHOD_NOT_ALLOWED });
        Object.defineProperty(this, 'type', { value: this });
        Object.defineProperty(this, 'timestamp', { value: +new Date() });
    }
}