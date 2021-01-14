class Forbidden extends Error {
    [x: string]: any;

    constructor(msg: string, forbidden: any) {
        super(msg);
        this.forbidden = forbidden;
        this.name = "Forbidden";
        this.timestamp = +new Date();
    }
}