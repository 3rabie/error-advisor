class NotFound extends Error {
    [x: string]: any;

    constructor(msg: string, notFound: any) {
        super(msg);
        this.notFound = notFound;
        this.name = "NotFound";
        this.timestamp = +new Date();
    }
}