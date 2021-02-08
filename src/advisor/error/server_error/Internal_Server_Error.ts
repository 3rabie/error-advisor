class Internal_Server_Error extends Error {

    constructor(msg: string, internalServerErrors: any) {
        super(msg);
        this.name = "Internal Server Error";
        Object.defineProperty(this, 'status', { value: StatusCode.INTERNAL_SERVER_ERROR });
        Object.defineProperty(this, 'type', { value: internalServerErrors });
        Object.defineProperty(this, 'timestamp', { value: +new Date() });
    }
}