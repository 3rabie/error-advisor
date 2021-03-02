import { StatusCode } from "../../enum/StatusCode";

export default class NetworkAuthenticationRequired extends Error {
  statusCode: StatusCode;
  type: string;
  timestamp: number;

  constructor(message?: string) {
    message = message || "Request cannot be fulfilled -  Authenticate is required to gain network access.";
    super(message);
    this.name = "Network Authentication Required";
    this.statusCode = StatusCode.NETWORK_AUTHENTICATION_REQUIRED;
    this.type = this.name;
    this.timestamp = +new Date();
  }
}
