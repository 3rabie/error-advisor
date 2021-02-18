import { StatusCode } from "../../enum/StatusCode";

export default class Gone extends Error {

    constructor(msg?: string) {
        msg = msg || "Request cannot be fulfilled - Resource has been removed and\or no longer available.";
        super(msg);
        this.name = "Gone";
        Object.defineProperty(this, 'status', { value: StatusCode.GONE });
        Object.defineProperty(this, 'type', { value: this });
        Object.defineProperty(this, 'timestamp', { value: +new Date() });
    }
}