export default class Gateway_Timeout extends Error {

    constructor(msg: string, gatewayTimeout: any) {
        super(msg);
        this.name = "Gateway Timeout";
        Object.defineProperty(this, 'status', { value: StatusCode.GATEWAY_TIMEOUT });
        Object.defineProperty(this, 'type', { value: gatewayTimeout });
        Object.defineProperty(this, 'timestamp', { value: +new Date() });
    }
}