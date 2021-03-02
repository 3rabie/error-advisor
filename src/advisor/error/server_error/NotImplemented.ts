import { StatusCode } from "../../enum/StatusCode";

export default class NotImplemented extends Error {
  statusCode: StatusCode;
  type: string;
  timestamp: number;

  constructor(message?: string) {
    message = message || "Request cannot be fulfilled -  Request method is not implemented.";
    super(message);
    this.name = "Not Implemented";
    this.statusCode = StatusCode.NOT_IMPLEMENTED;
    this.type = this.name;
    this.timestamp = +new Date();
  }
}
