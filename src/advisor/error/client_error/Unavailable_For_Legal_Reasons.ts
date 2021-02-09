export default class Unavailable_For_Legal_Reasons extends Error {

    constructor(msg: string, unavailableForLegalReasons: any) {
        super(msg);
        this.name = "Unavailable For Legal Reasons";
        Object.defineProperty(this, 'status', { value: StatusCode.UNAVAILABLE_FOR_LEGAL_REASONS });
        Object.defineProperty(this, 'type', { value: unavailableForLegalReasons });
        Object.defineProperty(this, 'timestamp', { value: +new Date() });
    }
}