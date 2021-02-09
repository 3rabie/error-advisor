export default class Forbidden extends Error {

    constructor(msg: string, forbidden: any) {
        super(msg);
        this.name = "Forbidden";
        Object.defineProperty(this, 'status', { value: StatusCode.FORBIDDEN });
        Object.defineProperty(this, 'type', { value: forbidden });
        Object.defineProperty(this, 'timestamp', { value: +new Date() });
    }
}