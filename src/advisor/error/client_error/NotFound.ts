import { StatusCode } from "../../enum/StatusCode";

export default class NotFound extends Error {
  statusCode: StatusCode;
  type: string;
  timestamp: number;

  constructor(message?: string) {
    message = message || "Request cannot be fulfilled - Requested resource could not be fount.";
    super(message);
    this.name = "Not Found";
    this.statusCode = StatusCode.NOT_FOUND;
    this.type = this.name;
    this.timestamp = +new Date();
  }
}
