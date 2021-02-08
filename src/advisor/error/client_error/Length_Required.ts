class Length_Required extends Error {

    constructor(msg: string, lengthRequired: any) {
        super(msg);
        this.name = "Length Required";
        Object.defineProperty(this, 'status', { value: StatusCode.LENGTH_REQUIRED });
        Object.defineProperty(this, 'type', { value: lengthRequired });
        Object.defineProperty(this, 'timestamp', { value: +new Date() });
    }
}