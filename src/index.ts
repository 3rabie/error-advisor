import { Internal_Server_Error } from "./advisor/error/server_error/Server_Errors";
import Utils from "./advisor/util/Utils";
import Log from "./logger";
import Logger from "./logger";

export default function errorAdvisor(options: any, err: any, res: any) {

    let error: any;
    let logger: Logger;

    if (err && err.hasOwnProperty("message") && err.hasOwnProperty("type") && err.hasOwnProperty("status") && err.hasOwnProperty("timestamp")) {
        error = Utils.errorBuilder(err.message, err.type, err.status, err.timestamp);
    } else if (err && err.hasOwnProperty("status")) {
        let errorBasedOnStatusCode: any = Utils.errorFactory(err.status);
        
        error = Utils.errorBuilder(errorBasedOnStatusCode.msg, errorBasedOnStatusCode.type, errorBasedOnStatusCode.status, errorBasedOnStatusCode.timestamp);
    } else if (err && err.hasOwnProperty("code")) {
        let errorBasedOnStatusCode: any = JSON.stringify(Utils.errorFactory(err.status));
        error = Utils.errorBuilder(errorBasedOnStatusCode.message, errorBasedOnStatusCode.name, errorBasedOnStatusCode.status, errorBasedOnStatusCode.timestamp);
    } else if (err && err.hasOwnProperty("statusCode")) {
        let errorBasedOnStatusCode: any = JSON.stringify(Utils.errorFactory(err.status));
        error = Utils.errorBuilder(errorBasedOnStatusCode.message, errorBasedOnStatusCode.type, errorBasedOnStatusCode.status, errorBasedOnStatusCode.timestamp);
    } else {
        let unrecognizedError: any = JSON.stringify(new Internal_Server_Error());
        error = Utils.errorBuilder(unrecognizedError.message, unrecognizedError.type, unrecognizedError.status, unrecognizedError.timestamp);
    }

    console.log(error.status);
    (options && options.debug && typeof options.debug === "boolean") && (error.stack = err.stack);

    (options && options.env) && (logger = new Log(options.env));
    (options && options.env && options.log && typeof options.log === "boolean") && (logger.error(err));
    

    return res.status(error.status).json(error);
}

export * from "./advisor/error/client_error/Client_Errors";
export * from "./advisor/error/server_error/Server_Errors";

