import { StatusCode } from "../../enum/StatusCode";

export default class Precondition_Failed extends Error {

    constructor(msg?: string) {
        msg = msg || "Request cannot be fulfilled - The precondition given in the request evaluated to false.";
        super(msg);
        this.name = "Precondition Failed";
        Object.defineProperty(this, 'status', { value: StatusCode.PRECONDITION_FAILED });
        Object.defineProperty(this, 'type', { value: this });
        Object.defineProperty(this, 'timestamp', { value: +new Date() });
    }
}