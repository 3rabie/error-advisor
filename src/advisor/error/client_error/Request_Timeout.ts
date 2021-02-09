export default class Request_Timeout extends Error {

    constructor(msg: string, requestTimeout: any) {
        super(msg);
        this.name = "Request Timeout";
        Object.defineProperty(this, 'status', { value: StatusCode.REQUEST_TIMEOUT });
        Object.defineProperty(this, 'type', { value: requestTimeout });
        Object.defineProperty(this, 'timestamp', { value: +new Date() });
    }
}