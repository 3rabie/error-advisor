import { StatusCode } from "../../enum/StatusCode";

export default class Loop_Detected extends Error {

    constructor(msg?: string) {
        msg = msg || "Request cannot be fulfilled - Operation terminated due an infinite loop.";
        super(msg);
        this.name = "Loop Detected";
        Object.defineProperty(this, 'status', { value: StatusCode.LOOP_DETECTED });
        Object.defineProperty(this, 'type', { value: this });
        Object.defineProperty(this, 'timestamp', { value: +new Date() });
    }
}