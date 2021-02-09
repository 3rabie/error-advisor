export default class Loop_Detected extends Error {

    constructor(msg: string, loopDetected: any) {
        super(msg);
        this.name = "Loop Detected";
        Object.defineProperty(this, 'status', { value: StatusCode.LOOP_DETECTED });
        Object.defineProperty(this, 'type', { value: loopDetected });
        Object.defineProperty(this, 'timestamp', { value: +new Date() });
    }
}