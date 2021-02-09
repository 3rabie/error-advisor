export default class Variant_Also_Negotiates extends Error {

    constructor(msg: string, variantAlsoNegotiates: any) {
        super(msg);
        this.name = "Variant Also Negotiates";
        Object.defineProperty(this, 'status', { value: StatusCode.VARIANT_ALSO_NEGOTIATES });
        Object.defineProperty(this, 'type', { value: variantAlsoNegotiates });
        Object.defineProperty(this, 'timestamp', { value: +new Date() });
    }
}