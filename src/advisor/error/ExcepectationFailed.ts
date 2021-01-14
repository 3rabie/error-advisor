class ExcepectationFailed extends Error {
    [x: string]: any;

    constructor(msg: string, excepectationFailed: any) {
        super(msg);
        this.excepectationFailed = excepectationFailed;
        this.name = "ExcepectationFailed";
        this.timestamp = +new Date();
    }
}