class Gone extends Error {

    constructor(msg: string, gone: any) {
        super(msg);
        this.name = "Gone";
        Object.defineProperty(this, 'status', { value: StatusCode.GONE });
        Object.defineProperty(this, 'type', { value: gone });
        Object.defineProperty(this, 'timestamp', { value: +new Date() });
    }
}