export default class Proxy_Authentication_Required extends Error {

    constructor(msg: string, proxyAuthenticationRequired: any) {
        super(msg);
        this.name = "Proxy Authentication Required";
        Object.defineProperty(this, 'status', { value: StatusCode.PROXY_AUTHENTICATION_REQUIRED });
        Object.defineProperty(this, 'type', { value: proxyAuthenticationRequired });
        Object.defineProperty(this, 'timestamp', { value: +new Date() });
    }
}