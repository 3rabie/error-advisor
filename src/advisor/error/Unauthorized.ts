class Unauthorized extends Error {
    [x: string]: any;

    constructor(msg: string, unauthorized: any) {
        super(msg);
        this.unauthorized = unauthorized;
        this.name = "Unauthorized";
        this.timestamp = +new Date();
    }
}