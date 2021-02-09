export default class Http_Version_Not_Supported extends Error {

    constructor(msg: string, httpVersionNotSupported: any) {
        super(msg);
        this.name = "Http Version Not Supported";
        Object.defineProperty(this, 'status', { value: StatusCode.HTTP_VERSION_NOT_SUPPORTED });
        Object.defineProperty(this, 'type', { value: httpVersionNotSupported });
        Object.defineProperty(this, 'timestamp', { value: +new Date() });
    }
}