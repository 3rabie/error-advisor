class Unprocessable_Entity extends Error {

    constructor(msg: string, unprocessableEntity: any) {
        super(msg);
        this.name = "Unprocessable Entity";
        Object.defineProperty(this, 'status', { value: StatusCode.UNPROCESSABLE_ENTITY });
        Object.defineProperty(this, 'type', { value: unprocessableEntity });
        Object.defineProperty(this, 'timestamp', { value: +new Date() });
    }
}