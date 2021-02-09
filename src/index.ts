import Utils from "./advisor/util/Utils";
import { logger } from "./logger";

export default function errorAdvisor(debug: Boolean, log: Boolean, err: any, req: any, res: any) {

    let error = Utils.errorBuilder(err.message, err.unauthorized, err.status, err.timestamp);

    if (debug) {
        error.stack = err.stack;
    }

    if (log && typeof log === 'boolean') {
        logger.error(error);
    }

    return res.status(err.status).json(error);
}

export * from "./advisor/error/client_error/Client_Errors";
export * from "./advisor/error/server_error/Server_Errors";

