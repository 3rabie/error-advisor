class Bad_Gateway extends Error {

    constructor(msg: string, badGateway: any) {
        super(msg);
        this.name = "Bad Gateway";
        Object.defineProperty(this, 'status', { value: StatusCode.BAD_REQUEST });
        Object.defineProperty(this, 'type', { value: badGateway });
        Object.defineProperty(this, 'timestamp', { value: +new Date() });
    }
}