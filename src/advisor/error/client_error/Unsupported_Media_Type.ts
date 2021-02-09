export default class Unsupported_Media_Type extends Error {

    constructor(msg: string, unsupportedMediaType: any) {
        super(msg);
        this.name = "Unsupported Media Type";
        Object.defineProperty(this, 'status', { value: StatusCode.UNSUPPORTED_MEDIA_TYPE });
        Object.defineProperty(this, 'type', { value: unsupportedMediaType });
        Object.defineProperty(this, 'timestamp', { value: +new Date() });
    }
}