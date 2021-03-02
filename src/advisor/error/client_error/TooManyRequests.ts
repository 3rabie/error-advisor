import { StatusCode } from "../../enum/StatusCode";

export default class TooManyRequests extends Error {
  statusCode: StatusCode;
  type: string;
  timestamp: number;

  constructor(message?: string) {
    message = message || "Request cannot be fulfilled - Client has sent too many request.";
    super(message);
    this.name = "Too Many Requests";
    this.statusCode = StatusCode.TOO_MANY_REQUESTS;
    this.type = this.name;
    this.timestamp = +new Date();
  }
}
