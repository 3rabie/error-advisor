class Range_Not_Satisfiable extends Error {

    constructor(msg: string, rangeNotSatisfiable: any) {
        super(msg);
        this.name = "Range Not Satisfiable";
        Object.defineProperty(this, 'status', { value: StatusCode.RANGE_NOT_SATISFIABLE });
        Object.defineProperty(this, 'type', { value: rangeNotSatisfiable });
        Object.defineProperty(this, 'timestamp', { value: +new Date() });
    }
}