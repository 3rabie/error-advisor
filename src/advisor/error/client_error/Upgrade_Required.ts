export default class Upgrade_Required extends Error {

    constructor(msg: string, upgradeRequired: any) {
        super(msg);
        this.name = "Upgrade Required";
        Object.defineProperty(this, 'status', { value: StatusCode.UPGRAFE_REQUIRED });
        Object.defineProperty(this, 'type', { value: upgradeRequired });
        Object.defineProperty(this, 'timestamp', { value: +new Date() });
    }
}