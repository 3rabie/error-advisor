import { StatusCode } from "../../enum/StatusCode";

export default class MethodNotAllowed extends Error {
  statusCode: StatusCode;
  type: string;
  timestamp: number;

  constructor(message?: string) {
    message = message || "Request cannot be fulfilled - Requested http method is not supported.";
    super(message);
    this.name = "Method Not Allowed";
    this.statusCode = StatusCode.METHOD_NOT_ALLOWED;
    this.type = this.name;
    this.timestamp = +new Date();
  }
}
