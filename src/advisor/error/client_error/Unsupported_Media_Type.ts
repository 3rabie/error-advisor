import { StatusCode } from "../../enum/StatusCode";

export default class Unsupported_Media_Type extends Error {

    constructor(msg?: string) {
        msg = msg || "Request cannot be fulfilled - Payload format is in an unsupported.";
        super(msg);
        this.name = "Unsupported Media Type";
        Object.defineProperty(this, 'status', { value: StatusCode.UNSUPPORTED_MEDIA_TYPE });
        Object.defineProperty(this, 'type', { value: this });
        Object.defineProperty(this, 'timestamp', { value: +new Date() });
    }
}