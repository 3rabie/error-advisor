import { StatusCode } from "../../enum/StatusCode";

export default class Not_Acceptable extends Error {

    constructor(msg?: string) {
        msg = msg || "Request cannot be fulfilled - Response generated is not supported from the client.";
        super(msg);
        this.name = "Not Acceptable";
        Object.defineProperty(this, 'status', { value: StatusCode.NOT_ACCEPTABLE });
        Object.defineProperty(this, 'type', { value: this });
        Object.defineProperty(this, 'timestamp', { value: +new Date() });
    }
}