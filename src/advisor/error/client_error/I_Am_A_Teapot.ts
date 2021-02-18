import { StatusCode } from "../../enum/StatusCode";

export default class I_Am_A_Teapot extends Error {

    constructor(msg?: string) {
        msg = msg || "Request cannot be fulfilled - Cannot handle the request at the meantime.";
        super(msg);
        this.name = "I'am A Teapot";
        Object.defineProperty(this, 'status', { value: StatusCode.I_AM_A_TEAPOT });
        Object.defineProperty(this, 'type', { value: this });
        Object.defineProperty(this, 'timestamp', { value: +new Date() });
    }
}