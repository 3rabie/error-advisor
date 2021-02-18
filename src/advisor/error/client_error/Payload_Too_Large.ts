import { StatusCode } from "../../enum/StatusCode";

export default class Payload_Too_Large extends Error {

    constructor(msg?: string) {
        msg = msg || "Request cannot be fulfilled - Request entity is larger than limits defined by server.";
        super(msg);
        this.name = "Payload Too Large";
        Object.defineProperty(this, 'status', { value: StatusCode.PAYLOAD_TOO_LARGE });
        Object.defineProperty(this, 'type', { value: this });
        Object.defineProperty(this, 'timestamp', { value: +new Date() });
    }
}