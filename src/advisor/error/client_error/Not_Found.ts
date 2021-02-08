class NotFound extends Error {

    constructor(msg: string, notFound: any) {
        super(msg);
        this.name = "Not Found";
        Object.defineProperty(this, 'status', { value: StatusCode.NOT_FOUND });
        Object.defineProperty(this, 'type', { value: notFound });
        Object.defineProperty(this, 'timestamp', { value: +new Date() });
    }
}