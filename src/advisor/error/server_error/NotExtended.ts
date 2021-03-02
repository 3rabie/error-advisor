import { StatusCode } from "../../enum/StatusCode";

export default class NotExtended extends Error {
  statusCode: StatusCode;
  type: string;
  timestamp: number;

  constructor(message?: string) {
    message = message || "Request cannot be fulfilled -  Not Extended.";
    super(message);
    this.name = "Not Extended";
    this.statusCode = StatusCode.NOT_EXTENDED;
    this.type = this.name;
    this.timestamp = +new Date();
  }
}
