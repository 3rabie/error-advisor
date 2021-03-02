import { StatusCode } from "../enum/StatusCode";
import {
    ExcepectationFailed,
    Forbidden,
    Gone,
    Conflict,
    BadRequest,
    Unauthorized,
    IAmATeapot,
    LengthRequired,
    MethodNotAllowed,
    NotAcceptable,
    NotFound,
    PayloadTooLarge,
    PaymentRequied,
    PreconditionFailed,
    PreconditionRequired,
    ProxyAuthenticationRequired,
    RangeNotSatisfiable,
    RequestHeaderFieldsTooLarge,
    RequestTimeout,
    TooEarly,
    TooManyRequests,
    UnavailableForLegalReasons,
    UnprocessableEntity,
    UnsupportedMediaType,
    UpgradeRequired,
    URITooLong,
} from "../error/client_error/Client_Errors";
import {
    BadGateway,
    GatewayTimeout,
    HttpVersionNotSupported,
    InsufficientStorage,
    InternalServerError,
    LoopDetected,
    NetworkAuthenticationRequired,
    NotExtended,
    NotImplemented,
    ServiceUnavailable,
    VariantAlsoNegotiates,
} from "../error/server_error/Server_Errors";

export default class Utils {
    static errorBuilder(msg: string, type: any, statusCode: any, timestamp: string): any {
        return {
            message: msg,
            error: type,
            status: statusCode,
            timestamp,
            stack: "",
        };
    }

    static isClientError(statusCode: number) {
        return statusCode >= 400 && statusCode <= 499;
    }

    static isServerError(statusCode: number) {
        return statusCode >= 500 && statusCode <= 599;
    }

    /**
     * Utility function that create error object based on the status code given,
     * @param status
     * @param message Optional parameter if it's exist it's value will be used either the default value will be picked.
     */
    static errorFactory(status: number, message?: string) {
        switch (status) {
            case StatusCode.BAD_REQUEST:
                return new BadRequest(message);
            case StatusCode.UNAUTHORIZED:
                return new Unauthorized(message);
            case StatusCode.PAYMENT_REQUIRED:
                return new PaymentRequied(message);
            case StatusCode.FORBIDDEN:
                return new Forbidden(message);
            case StatusCode.NOT_FOUND:
                return new NotFound(message);
            case StatusCode.METHOD_NOT_ALLOWED:
                return new MethodNotAllowed(message);
            case StatusCode.NOT_ACCEPTABLE:
                return new NotAcceptable(message);
            case StatusCode.PROXY_AUTHENTICATION_REQUIRED:
                return new ProxyAuthenticationRequired(message);
            case StatusCode.REQUEST_TIMEOUT:
                return new RequestTimeout(message);
            case StatusCode.CONFLICT:
                return new Conflict(message);
            case StatusCode.GONE:
                return new Gone(message);
            case StatusCode.LENGTH_REQUIRED:
                return new LengthRequired(message);
            case StatusCode.PRECONDITION_FAILED:
                return new PreconditionFailed(message);
            case StatusCode.PAYLOAD_TOO_LARGE:
                return new PayloadTooLarge(message);
            case StatusCode.URI_TOO_LONG:
                return new URITooLong(message);
            case StatusCode.UNSUPPORTED_MEDIA_TYPE:
                return new UnsupportedMediaType(message);
            case StatusCode.RANGE_NOT_SATISFIABLE:
                return new RangeNotSatisfiable(message);
            case StatusCode.EXPECTATION_FAILED:
                return new ExcepectationFailed(message);
            case StatusCode.I_AM_A_TEAPOT:
                return new IAmATeapot(message);
            case StatusCode.UNPROCESSABLE_ENTITY:
                return new UnprocessableEntity(message);
            case StatusCode.TOO_EARLY:
                return new TooEarly(message);
            case StatusCode.UPGRAFE_REQUIRED:
                return new UpgradeRequired(message);
            case StatusCode.PRECONDITION_REQUIRED:
                return new PreconditionRequired(message);
            case StatusCode.TOO_MANY_REQUESTS:
                return new TooManyRequests(message);
            case StatusCode.REQUEST_HEADER_FIELDS_TOO_LARGE:
                return new RequestHeaderFieldsTooLarge(message);
            case StatusCode.UNAVAILABLE_FOR_LEGAL_REASONS:
                return new UnavailableForLegalReasons(message);
            case StatusCode.NOT_IMPLEMENTED:
                return new NotImplemented(message);
            case StatusCode.BAD_GATEWAY:
                return new BadGateway(message);
            case StatusCode.SERVICE_UNAVAILABLE:
                return new ServiceUnavailable(message);
            case StatusCode.GATEWAY_TIMEOUT:
                return new GatewayTimeout(message);
            case StatusCode.HTTP_VERSION_NOT_SUPPORTED:
                return new HttpVersionNotSupported(message);
            case StatusCode.VARIANT_ALSO_NEGOTIATES:
                return new VariantAlsoNegotiates(message);
            case StatusCode.INSUFFICIENT_STORAGE:
                return new InsufficientStorage(message);
            case StatusCode.LOOP_DETECTED:
                return new LoopDetected(message);
            case StatusCode.NOT_EXTENDED:
                return new NotExtended(message);
            case StatusCode.NETWORK_AUTHENTICATION_REQUIRED:
                return new NetworkAuthenticationRequired(message);
            default:
                return new InternalServerError(message);
        }
    }
}
