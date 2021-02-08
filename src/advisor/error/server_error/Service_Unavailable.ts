class Service_Unavailable extends Error {

    constructor(msg: string, serviceUnavailable: any) {
        super(msg);
        this.name = "Service Unavailable";
        Object.defineProperty(this, 'status', { value: StatusCode.SERVICE_UNAVAILABLE });
        Object.defineProperty(this, 'type', { value: serviceUnavailable });
        Object.defineProperty(this, 'timestamp', { value: +new Date() });
    }
}