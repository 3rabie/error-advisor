export default class Payment_Requied extends Error {

    constructor(msg: string, paymentRequied: any) {
        super(msg);
        this.name = "Payment Requied";
        Object.defineProperty(this, 'status', { value: StatusCode.PAYMENT_REQUIRED });
        Object.defineProperty(this, 'type', { value: paymentRequied });
        Object.defineProperty(this, 'timestamp', { value: +new Date() });
    }
}