import { StatusCode } from "../../enum/StatusCode";

export default class RangeNotSatisfiable extends Error {
  statusCode: StatusCode;
  type: string;
  timestamp: number;

  constructor(message?: string) {
    message = message || "Request cannot be fulfilled - Requested ranges cannot be served.";
    super(message);
    this.name = "Range Not Satisfiable";
    this.statusCode = StatusCode.RANGE_NOT_SATISFIABLE;
    this.type = this.name;
    this.timestamp = +new Date();
  }
}
