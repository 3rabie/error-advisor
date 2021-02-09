export default class Insufficient_Storage extends Error {

    constructor(msg: string, insufficientStorage: any) {
        super(msg);
        this.name = "Insufficient Storage";
        Object.defineProperty(this, 'status', { value: StatusCode.INSUFFICIENT_STORAGE });
        Object.defineProperty(this, 'type', { value: insufficientStorage });
        Object.defineProperty(this, 'timestamp', { value: +new Date() });
    }
}