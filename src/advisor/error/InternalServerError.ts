class InternalServerError extends Error {
    [x: string]: any;

    constructor(msg: string, internalServerErrors: any) {
        super(msg);
        this.internalServerErrors = internalServerErrors;
        this.name = "InternalServerError";
        this.timestamp = +new Date();
    }
}