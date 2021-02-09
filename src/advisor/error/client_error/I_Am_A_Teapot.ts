export default class I_Am_A_Teapot extends Error {

    constructor(msg: string, iAmATeapot: any) {
        super(msg);
        this.name = "I'am A Teapot";
        Object.defineProperty(this, 'status', { value: StatusCode.I_AM_A_TEAPOT });
        Object.defineProperty(this, 'type', { value: iAmATeapot });
        Object.defineProperty(this, 'timestamp', { value: +new Date() });
    }
}