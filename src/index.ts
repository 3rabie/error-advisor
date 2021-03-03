import Utils from "./advisor/util/Utils";
import Log from "./logger";
import Logger from "./logger";
import InternalServerError from "./advisor/error/server_error/InternalServerError";

export default function errorAdvisor(options: any, err: any, res: any) {
  let error: any;
  const logger: Logger = new Log(options.env || "development");
  if (
    err &&
    err.hasOwnProperty("message") &&
    err.hasOwnProperty("type") &&
    err.hasOwnProperty("statusCode") &&
    err.hasOwnProperty("timestamp")
  ) {
    error = Utils.errorBuilder(err.message, err.type, err.statusCode, err.timestamp);
  } else if (err && err.hasOwnProperty("status")) {
    const errorBasedOnStatusCode: any = Utils.errorFactory(err.status);

    error = Utils.errorBuilder(
      errorBasedOnStatusCode.msg,
      errorBasedOnStatusCode.type,
      errorBasedOnStatusCode.status,
      errorBasedOnStatusCode.timestamp,
    );
  } else if (err && err.hasOwnProperty("code")) {
    const errorBasedOnStatusCode: any = JSON.stringify(Utils.errorFactory(err.status));
    error = Utils.errorBuilder(
      errorBasedOnStatusCode.message,
      errorBasedOnStatusCode.name,
      errorBasedOnStatusCode.status,
      errorBasedOnStatusCode.timestamp,
    );
  } else if (err && err.hasOwnProperty("statusCode")) {
    const errorBasedOnStatusCode: any = JSON.stringify(Utils.errorFactory(err.status));
    error = Utils.errorBuilder(
      errorBasedOnStatusCode.message,
      errorBasedOnStatusCode.type,
      errorBasedOnStatusCode.status,
      errorBasedOnStatusCode.timestamp,
    );
  } else {
    const unrecognizedError: any = JSON.stringify(new InternalServerError());
    error = Utils.errorBuilder(
      unrecognizedError.message,
      unrecognizedError.type,
      unrecognizedError.status,
      unrecognizedError.timestamp,
    );
  }

  options && options.debug && typeof options.debug === "boolean" && (error.stack = err.stack);

  options && options.env && options.log && typeof options.log === "boolean" && logger.error(err);
  return res.status(error.status).json(error);
}

export * from "./advisor/error/client_error/Client_Errors";
export * from "./advisor/error/server_error/Server_Errors";
export { default as Utils } from "./advisor/util/Utils";
