import { StatusCode } from "../../enum/StatusCode";

export default class BadRequest extends Error {
  statusCode: StatusCode;
  type: string;
  timestamp: number;

  constructor(message?: string) {
    message = message || "Request cannot be fulfilled - Malformed request syntax.";
    super(message);
    this.name = "Bad Request";
    this.statusCode = StatusCode.BAD_REQUEST;
    this.type = this.name;
    this.timestamp = +new Date();
  }
}
