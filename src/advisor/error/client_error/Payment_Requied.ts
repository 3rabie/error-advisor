import { StatusCode } from "../../enum/StatusCode";

export default class Payment_Requied extends Error {

    constructor(msg?: string) {
        msg = msg || "Request cannot be fulfilled -  Requested content is not available until the client makes a payment.";
        super(msg);
        this.name = "Payment Requied";
        Object.defineProperty(this, 'status', { value: StatusCode.PAYMENT_REQUIRED });
        Object.defineProperty(this, 'type', { value: this });
        Object.defineProperty(this, 'timestamp', { value: +new Date() });
    }
}