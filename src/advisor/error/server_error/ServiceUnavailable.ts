import { StatusCode } from "../../enum/StatusCode";

export default class ServiceUnavailable extends Error {
  statusCode: StatusCode;
  type: string;
  timestamp: number;

  constructor(message?: string) {
    message = message || "Request cannot be fulfilled -  The server is currently unavailable.";
    super(message);
    this.name = "Service Unavailable";
    this.statusCode = StatusCode.SERVICE_UNAVAILABLE;
    this.type = this.name;
    this.timestamp = +new Date();
  }
}
