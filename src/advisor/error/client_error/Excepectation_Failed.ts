import { StatusCode } from "../../enum/StatusCode";

export default class ExcepectationFailed extends Error {

    constructor(msg?: string) {
        msg = msg || "Request cannot be fulfilled - Cannot understand the Expect header or doesn't support it.";
        super(msg);
        this.name = "Excepectation Failed";
        Object.defineProperty(this, 'status', { value: StatusCode.EXPECTATION_FAILED });
        Object.defineProperty(this, 'type', { value: this });
        Object.defineProperty(this, 'timestamp', { value: +new Date() });
    }
}