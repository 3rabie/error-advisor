import { StatusCode } from "../enum/StatusCode";
import Bad_Request from "../error/client_error/Bad_Request";
import { Excepectation_Failed, Forbidden, Gone, I_Am_A_Teapot, Length_Required, Method_Not_Allowed, Not_Acceptable, Not_Found, Payload_Too_Large, Payment_Requied, Precondition_Failed, Precondition_Required, Proxy_Authentication_Required, Range_Not_Satisfiable, Request_Header_Fields_Too_Large, Request_Timeout, Too_Early, Too_Many_Requests, Unavailable_For_Legal_Reasons, Unprocessable_Entity, Unsupported_Media_Type, Upgrade_Required, URI_Too_Long } from "../error/client_error/Client_Errors";
import Conflict from "../error/client_error/Conflict";
import Unauthorized from "../error/client_error/Unauthorized";
import { Bad_Gateway, Gateway_Timeout, Http_Version_Not_Supported, Insufficient_Storage, Internal_Server_Error, Loop_Detected, Network_Authentication_Required, Not_Extended, Not_Implemented, Service_Unavailable, Variant_Also_Negotiates } from "../error/server_error/Server_Errors";

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

    /**
     * Utility function that create error object based on the status code given,
     * @param status 
     */
    static errorFactory(status: Number) {
        switch (status) {
            case StatusCode.BAD_REQUEST: return new Bad_Request();
            case StatusCode.UNAUTHORIZED: return new Unauthorized();
            case StatusCode.PAYMENT_REQUIRED: return new Payment_Requied();
            case StatusCode.FORBIDDEN: return new Forbidden();
            case StatusCode.NOT_FOUND: return new Not_Found();
            case StatusCode.METHOD_NOT_ALLOWED: return new Method_Not_Allowed;
            case StatusCode.NOT_ACCEPTABLE: return new Not_Acceptable();
            case StatusCode.PROXY_AUTHENTICATION_REQUIRED: return new Proxy_Authentication_Required();
            case StatusCode.REQUEST_TIMEOUT: return new Request_Timeout();
            case StatusCode.CONFLICT: return new Conflict();
            case StatusCode.GONE: return new Gone();
            case StatusCode.LENGTH_REQUIRED: return new Length_Required();
            case StatusCode.PRECONDITION_FAILED: return new Precondition_Failed();
            case StatusCode.PAYLOAD_TOO_LARGE: return new Payload_Too_Large();
            case StatusCode.URI_TOO_LONG: return new URI_Too_Long();
            case StatusCode.UNSUPPORTED_MEDIA_TYPE: return new Unsupported_Media_Type();
            case StatusCode.RANGE_NOT_SATISFIABLE: return new Range_Not_Satisfiable();
            case StatusCode.EXPECTATION_FAILED: return new Excepectation_Failed();
            case StatusCode.I_AM_A_TEAPOT: return new I_Am_A_Teapot();
            case StatusCode.UNPROCESSABLE_ENTITY: return new Unprocessable_Entity();
            case StatusCode.TOO_EARLY: return new Too_Early();
            case StatusCode.UPGRAFE_REQUIRED: return new Upgrade_Required();
            case StatusCode.PRECONDITION_REQUIRED: return new Precondition_Required();
            case StatusCode.TOO_MANY_REQUESTS: return new Too_Many_Requests();
            case StatusCode.REQUEST_HEADER_FIELDS_TOO_LARGE: return new Request_Header_Fields_Too_Large();
            case StatusCode.UNAVAILABLE_FOR_LEGAL_REASONS: return new Unavailable_For_Legal_Reasons();
            case StatusCode.NOT_IMPLEMENTED: return new Not_Implemented();
            case StatusCode.BAD_GATEWAY: return new Bad_Gateway();
            case StatusCode.SERVICE_UNAVAILABLE: return new Service_Unavailable();
            case StatusCode.GATEWAY_TIMEOUT: return new Gateway_Timeout();
            case StatusCode.HTTP_VERSION_NOT_SUPPORTED: return new Http_Version_Not_Supported();
            case StatusCode.VARIANT_ALSO_NEGOTIATES: return new Variant_Also_Negotiates();
            case StatusCode.INSUFFICIENT_STORAGE: return new Insufficient_Storage();
            case StatusCode.LOOP_DETECTED: return new Loop_Detected();
            case StatusCode.NOT_EXTENDED: return new Not_Extended();
            case StatusCode.NETWORK_AUTHENTICATION_REQUIRED: return new Network_Authentication_Required();
            default: return new Internal_Server_Error();
        }
    }
}