import Utils from "./advisor/util/Utils";
import { logger } from "./logger";

exports = module.exports = function errorAdvisor(debug: Boolean, log: Boolean, err: any, req: any, res: any) {

    let error = Utils.errorBuilder(err.message, err.unauthorized, err.status, err.timestamp);

    if (debug) {
        error.stack = err.stack;
    }

    if (log && typeof log === 'boolean') {
        logger.error(error);
    }

    return res.status(err.status).json(error);
}