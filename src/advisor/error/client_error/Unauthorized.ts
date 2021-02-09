export default class Unauthorized extends Error {

    constructor(msg: string, unauthorized: any) {
        super(msg);
        this.name = "Unauthorized";
        Object.defineProperty(this, 'status', { value: StatusCode.UNAUTHORIZED });
        Object.defineProperty(this, 'type', { value: unauthorized });
        Object.defineProperty(this, 'timestamp', { value: +new Date() });
    }
}