class Precondition_Required extends Error {

    constructor(msg: string, preconditionRequired: any) {
        super(msg);
        this.name = "Precondition Required";
        Object.defineProperty(this, 'status', { value: StatusCode.PRECONDITION_REQUIRED });
        Object.defineProperty(this, 'type', { value: preconditionRequired });
        Object.defineProperty(this, 'timestamp', { value: +new Date() });
    }
}