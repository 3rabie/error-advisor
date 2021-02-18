import { StatusCode } from "../../enum/StatusCode";

export default class Range_Not_Satisfiable extends Error {

    constructor(msg?: string) {
        msg = msg || "Request cannot be fulfilled - Requested ranges cannot be served.";
        super(msg);
        this.name = "Range Not Satisfiable";
        Object.defineProperty(this, 'status', { value: StatusCode.RANGE_NOT_SATISFIABLE });
        Object.defineProperty(this, 'type', { value: this });
        Object.defineProperty(this, 'timestamp', { value: +new Date() });
    }
}