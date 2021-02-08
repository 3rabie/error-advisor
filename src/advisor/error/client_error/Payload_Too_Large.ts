class Payload_Too_Large extends Error {

    constructor(msg: string, payloadTooLarge: any) {
        super(msg);
        this.name = "Payload Too Large";
        Object.defineProperty(this, 'status', { value: StatusCode.PAYLOAD_TOO_LARGE });
        Object.defineProperty(this, 'type', { value: payloadTooLarge });
        Object.defineProperty(this, 'timestamp', { value: +new Date() });
    }
}