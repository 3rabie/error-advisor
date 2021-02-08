class Network_Authentication_Required extends Error {

    constructor(msg: string, networkAuthenticationRequired: any) {
        super(msg);
        this.name = "Network Authentication Required";
        Object.defineProperty(this, 'status', { value: StatusCode.NETWORK_AUTHENTICATION_REQUIRED });
        Object.defineProperty(this, 'type', { value: networkAuthenticationRequired });
        Object.defineProperty(this, 'timestamp', { value: +new Date() });
    }
}