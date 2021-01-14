'use strict';
import Utils from "./util/Utils"

export class ExceptionAdvisor {
    constructor(){}

    BusinessErrorFactory(error: any, request: any, response: any, next: any) {
        if (error instanceof ValidationError) {
            Utils.errorBuilder(response, error.message, error.validationErrors, StatusCodes.BAD_REQUEST, error.timestamp);
        }

        next();
    }

    HttpErrorFactory(error: any, request: any, response: any, next: any) {
        let err: any ;
        switch (true) {
            case error instanceof Unauthorized:
                err = Utils.errorBuilder(response, error.message, error.unauthorized, StatusCodes.UNAUTHORIZED, error.timestamp);
                break;
            case error instanceof Forbidden:
                err = Utils.errorBuilder(response, error.message, error.forbidden, StatusCodes.FORBIDDEN, error.timestamp);
                break;
            case error instanceof NotFound:
                err = Utils.errorBuilder(response, error.message, error.notFound, StatusCodes.NOT_FOUND, error.timestamp);
                break;
            case error instanceof MethodNotAllowed:
                err = Utils.errorBuilder(response, error.message, error.methodNotAllowed, StatusCodes.METHOD_NOT_ALLOWED, error.timestamp);
                break;
            default:
                err = Utils.errorBuilder(response, error.message, error.internalServerErrors, StatusCodes.INTERNAL_SERVER_ERROR, error.timestamp);
                break;
        }

        next();
    }
}