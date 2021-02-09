export default class Not_Implemented extends Error {

    constructor(msg: string, notImplemented: any) {
        super(msg);
        this.name = "Not Implemented";
        Object.defineProperty(this, 'status', { value: StatusCode.NOT_IMPLEMENTED });
        Object.defineProperty(this, 'type', { value: notImplemented });
        Object.defineProperty(this, 'timestamp', { value: +new Date() });
    }
}