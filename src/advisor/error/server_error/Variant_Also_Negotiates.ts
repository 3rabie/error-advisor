import { StatusCode } from "../../enum/StatusCode";

export default class Variant_Also_Negotiates extends Error {

    constructor(msg?: string) {
        msg = msg || "Request cannot be fulfilled -  Internal server configuration error.";
        super(msg);
        this.name = "Variant Also Negotiates";
        Object.defineProperty(this, 'status', { value: StatusCode.VARIANT_ALSO_NEGOTIATES });
        Object.defineProperty(this, 'type', { value: this });
        Object.defineProperty(this, 'timestamp', { value: +new Date() });
    }
}