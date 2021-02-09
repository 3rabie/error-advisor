export default class Not_Acceptable extends Error {

    constructor(msg: string, notAcceptable: any) {
        super(msg);
        this.name = "Not Acceptable";
        Object.defineProperty(this, 'status', { value: StatusCode.NOT_ACCEPTABLE });
        Object.defineProperty(this, 'type', { value: notAcceptable });
        Object.defineProperty(this, 'timestamp', { value: +new Date() });
    }
}