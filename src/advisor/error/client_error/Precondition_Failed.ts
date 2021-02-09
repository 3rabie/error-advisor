export default class Precondition_Failed extends Error {

    constructor(msg: string, preconditionFailed: any) {
        super(msg);
        this.name = "Precondition Failed";
        Object.defineProperty(this, 'status', { value: StatusCode.PRECONDITION_FAILED });
        Object.defineProperty(this, 'type', { value: preconditionFailed });
        Object.defineProperty(this, 'timestamp', { value: +new Date() });
    }
}