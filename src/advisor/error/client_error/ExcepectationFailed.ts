import { StatusCode } from "../../enum/StatusCode";

export default class ExcepectationFailed extends Error {
  statusCode: StatusCode;
  type: string;
  timestamp: number;

  constructor(message?: string) {
    message = message || "Request cannot be fulfilled - Cannot understand the Expect header or doesn't support it.";
    super(message);
    this.name = "Excepectation Failed";
    this.statusCode = StatusCode.EXPECTATION_FAILED;
    this.type = this.name;
    this.timestamp = +new Date();
  }
}
