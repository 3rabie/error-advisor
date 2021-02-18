import { StatusCode } from "../../enum/StatusCode";

export default class Internal_Server_Error extends Error {

    constructor(msg?: string) {
        msg = msg || "Request cannot be fulfilled - Internal server error.";
        super(msg);
        this.name = "Internal Server Error";
        Object.defineProperty(this, 'status', { value: StatusCode.INTERNAL_SERVER_ERROR });
        Object.defineProperty(this, 'type', { value: this });
        Object.defineProperty(this, 'timestamp', { value: +new Date() });
    }
}