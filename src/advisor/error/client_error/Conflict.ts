class Conflict extends Error {

    constructor(msg: string, conflict: any) {
        super(msg);
        this.name = "Conflict";
        Object.defineProperty(this, 'status', { value: StatusCode.CONFLICT });
        Object.defineProperty(this, 'type', { value: conflict });
        Object.defineProperty(this, 'timestamp', { value: +new Date() });
    }
}