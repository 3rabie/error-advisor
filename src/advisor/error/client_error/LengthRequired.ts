import { StatusCode } from "../../enum/StatusCode";

export default class LengthRequired extends Error {
  statusCode: StatusCode;
  type: string;
  timestamp: number;

  constructor(message?: string) {
    message = message || "Request cannot be fulfilled - The `Content-Length` is not defined.";
    super(message);
    this.name = "Length Required";
    this.statusCode = StatusCode.LENGTH_REQUIRED;
    this.type = this.name;
    this.timestamp = +new Date();
  }
}
