class Bad_Request extends Error {

    constructor(msg: string, badRequest: any) {
        super(msg);
        this.name = "Bad Request";
        Object.defineProperty(this, 'status', { value: StatusCode.BAD_REQUEST });
        Object.defineProperty(this, 'type', { value: badRequest });
        Object.defineProperty(this, 'timestamp', { value: +new Date() });
    }
}