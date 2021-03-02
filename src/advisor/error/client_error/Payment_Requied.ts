import { StatusCode } from "../../enum/StatusCode";

export default class Payment_Requied extends Error {
    statusCode: StatusCode;
    type: string;
    timestamp: number;

    constructor(message?: string) {
        message = message || "Request cannot be fulfilled -  Requested content is not available until the client makes a payment.";
        super(message);
        this.name = "Payment Required";
        this.statusCode = StatusCode.PAYMENT_REQUIRED;
        this.type = this.name;
        this.timestamp = +new Date();
    }
}