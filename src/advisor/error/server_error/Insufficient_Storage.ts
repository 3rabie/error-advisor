import { StatusCode } from "../../enum/StatusCode";

export default class Insufficient_Storage extends Error {

    constructor(msg?: string) {
        msg = msg || "Request cannot be fulfilled - Cannot store the representation needed to complete the request.";
        super(msg);
        this.name = "Insufficient Storage";
        Object.defineProperty(this, 'status', { value: StatusCode.INSUFFICIENT_STORAGE });
        Object.defineProperty(this, 'type', { value: this });
        Object.defineProperty(this, 'timestamp', { value: +new Date() });
    }
}