import { StatusCode } from "../../enum/StatusCode";

export default class Conflict extends Error {
  statusCode: StatusCode;
  type: string;
  timestamp: number;

  constructor(message?: string) {
    message = message || "Request cannot be fulfilled - Resource already exists or in use for another operation.";
    super(message);
    this.name = "Conflict";
    this.statusCode = StatusCode.CONFLICT;
    this.type = this.name;
    this.timestamp = +new Date();
  }
}
