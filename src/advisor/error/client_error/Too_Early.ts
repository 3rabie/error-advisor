import { StatusCode } from "../../enum/StatusCode";

export default class Too_Early extends Error {

    constructor(msg?: string) {
        msg = msg || "Request cannot be fulfilled - Potential risk for a replay attack";
        super(msg);
        this.name = "Too Early";
        Object.defineProperty(this, 'status', { value: StatusCode.TOO_EARLY });
        Object.defineProperty(this, 'type', { value: this });
        Object.defineProperty(this, 'timestamp', { value: +new Date() });
    }
}