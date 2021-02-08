class Not_Extended extends Error {

    constructor(msg: string, notExtended: any) {
        super(msg);
        this.name = "Not Extended";
        Object.defineProperty(this, 'status', { value: StatusCode.NOT_EXTENDED });
        Object.defineProperty(this, 'type', { value: notExtended });
        Object.defineProperty(this, 'timestamp', { value: +new Date() });
    }
}