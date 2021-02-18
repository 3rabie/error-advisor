import { StatusCode } from "../../enum/StatusCode";

export default class Unauthorized extends Error {

    constructor(msg?: string) {
        msg = msg || "Request cannot be fulfilled - Request requires user authentication.";
        super(msg);
        this.name = "Unauthorized";
        Object.defineProperty(this, 'status', { value: StatusCode.UNAUTHORIZED });
        Object.defineProperty(this, 'type', { value: this });
        Object.defineProperty(this, 'timestamp', { value: +new Date() });
    }
}