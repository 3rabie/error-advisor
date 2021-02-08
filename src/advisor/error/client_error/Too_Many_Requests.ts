class Too_Many_Requests extends Error {

    constructor(msg: string, tooManyRequests: any) {
        super(msg);
        this.name = "Too Many Requests";
        Object.defineProperty(this, 'status', { value: StatusCode.TOO_MANY_REQUESTS });
        Object.defineProperty(this, 'type', { value: tooManyRequests });
        Object.defineProperty(this, 'timestamp', { value: +new Date() });
    }
}