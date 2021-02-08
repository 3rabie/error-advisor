class ExcepectationFailed extends Error {

    constructor(msg: string, excepectationFailed: any) {
        super(msg);
        this.name = "Excepectation Failed";
        Object.defineProperty(this, 'status', { value: StatusCode.EXPECTATION_FAILED });
        Object.defineProperty(this, 'type', { value: excepectationFailed });
        Object.defineProperty(this, 'timestamp', { value: +new Date() });
    }
}