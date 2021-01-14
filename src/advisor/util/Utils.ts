export default class Utils {
    static errorBuilder(response: any, msg: String, type: any, statusCodes: any, timestamp: String): any {
        return response.status()
            .json({
                message: msg,
                error: type,
                status: statusCodes,
                timestamp: timestamp,
            });
    }
}