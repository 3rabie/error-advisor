import { throws } from "assert";
import { StatusCode } from "../../enum/StatusCode";

export default class Unprocessable_Entity extends Error {

    constructor(msg?: string) {
        msg = msg || "Request cannot be fulfilled - Unable to process the contained instructions.";
        super(msg);
        this.name = "Unprocessable Entity";
        Object.defineProperty(this, 'status', { value: StatusCode.UNPROCESSABLE_ENTITY });
        Object.defineProperty(this, 'type', { value: this });
        Object.defineProperty(this, 'timestamp', { value: +new Date() });
    }
}