import { StatusCode } from "../../enum/StatusCode";

export default class Request_Header_Fields_Too_Large extends Error {

    constructor(msg?: string) {
        msg = msg || "Request cannot be fulfilled - HTTP headers are too long.";
        super(msg);
        this.name = "Request Header Fields Too Large";
        Object.defineProperty(this, 'status', { value: StatusCode.REQUEST_HEADER_FIELDS_TOO_LARGE });
        Object.defineProperty(this, 'type', { value: this });
        Object.defineProperty(this, 'timestamp', { value: +new Date() });
    }
}