import { StatusCode } from "../../enum/StatusCode";

export default class Upgrade_Required extends Error {

    constructor(msg?: string) {
        msg = msg || "Request cannot be fulfilled - Current protocol is not supported.";
        super(msg);
        this.name = "Upgrade Required";
        Object.defineProperty(this, 'status', { value: StatusCode.UPGRAFE_REQUIRED });
        Object.defineProperty(this, 'type', { value: this });
        Object.defineProperty(this, 'timestamp', { value: +new Date() });
    }
}