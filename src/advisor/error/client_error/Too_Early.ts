class Too_Early extends Error {

    constructor(msg: string, tooEarly: any) {
        super(msg);
        this.name = "Too Early";
        Object.defineProperty(this, 'status', { value: StatusCode.TOO_EARLY });
        Object.defineProperty(this, 'type', { value: tooEarly });
        Object.defineProperty(this, 'timestamp', { value: +new Date() });
    }
}