import { StatusCode } from "../../enum/StatusCode";

export default class URI_Too_Long extends Error {

    constructor(msg?: string) {
        msg = msg || "Request cannot be fulfilled - URL is too long.";
        super(msg);
        this.name = "URI Too Long";
        Object.defineProperty(this, 'status', { value: StatusCode.URI_TOO_LONG });
        Object.defineProperty(this, 'type', { value: this });
        Object.defineProperty(this, 'timestamp', { value: +new Date() });
    }
}