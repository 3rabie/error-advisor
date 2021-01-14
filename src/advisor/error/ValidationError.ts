class ValidationError extends Error {
    [x: string]: any;

    constructor(msg: string, validationErrors: any) {
        super(msg);
        this.validationErrors = validationErrors;
        this.name = "ValidationError";
        this.timestamp = +new Date();
    }
}