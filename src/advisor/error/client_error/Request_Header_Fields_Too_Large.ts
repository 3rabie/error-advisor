export default class Request_Header_Fields_Too_Large extends Error {

    constructor(msg: string, requestHeaderFieldsTooLarge: any) {
        super(msg);
        this.name = "Request Header Fields Too Large";
        Object.defineProperty(this, 'status', { value: StatusCode.REQUEST_HEADER_FIELDS_TOO_LARGE });
        Object.defineProperty(this, 'type', { value: requestHeaderFieldsTooLarge });
        Object.defineProperty(this, 'timestamp', { value: +new Date() });
    }
}