import { StatusCode } from "../../enum/StatusCode";

export default class Unavailable_For_Legal_Reasons extends Error {

    constructor(msg?: string) {
        msg = msg || "Request cannot be fulfilled - Requested resource is not available due to legal reasons.";
        super(msg);
        this.name = "Unavailable For Legal Reasons";
        Object.defineProperty(this, 'status', { value: StatusCode.UNAVAILABLE_FOR_LEGAL_REASONS });
        Object.defineProperty(this, 'type', { value: this });
        Object.defineProperty(this, 'timestamp', { value: +new Date() });
    }
}