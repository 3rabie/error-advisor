class URI_Too_Long extends Error {

    constructor(msg: string, uriTooLong: any) {
        super(msg);
        this.name = "URI Too Long";
        Object.defineProperty(this, 'status', { value: StatusCode.URI_TOO_LONG });
        Object.defineProperty(this, 'type', { value: uriTooLong });
        Object.defineProperty(this, 'timestamp', { value: +new Date() });
    }
}