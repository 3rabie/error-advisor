class Method_Not_Allowed extends Error {

    constructor(msg: string, methodNotAllowed: any) {
        super(msg);
        this.name = "Method Not Allowed";
        Object.defineProperty(this, 'status', { value: StatusCode.METHOD_NOT_ALLOWED });
        Object.defineProperty(this, 'type', { value: methodNotAllowed });
        Object.defineProperty(this, 'timestamp', { value: +new Date() });
    }
}