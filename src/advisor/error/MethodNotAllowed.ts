class MethodNotAllowed extends Error {
    [x: string]: any;

    constructor(msg: string, methodNotAllowed: any) {
        super(msg);
        this.methodNotAllowed = methodNotAllowed;
        this.name = "MethodNotAllowed";
        this.timestamp = +new Date();
    }
}