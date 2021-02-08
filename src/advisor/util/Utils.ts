export default class Utils {
    static errorBuilder(msg: String, type: any, statusCode: any, timestamp: String): any {
        return {
            message: msg,
            error: type,
            status: statusCode,
            timestamp: timestamp,
            stack: "",
        }
    }

    static isClientError(statusCode: number) {
        return (statusCode >= 400 && statusCode <= 499);
    }

    static isServerError(statusCode: number) {
        return (statusCode >= 500 && statusCode <= 599);
    }
}