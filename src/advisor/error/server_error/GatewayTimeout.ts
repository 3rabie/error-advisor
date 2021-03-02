import { StatusCode } from "../../enum/StatusCode";

export default class GatewayTimeout extends Error {
  statusCode: StatusCode;
  type: string;
  timestamp: number;

  constructor(message?: string) {
    message = message || "Request cannot be fulfilled - Gateway timeout.";
    super(message);
    this.name = "Gateway Timeout";
    this.statusCode = StatusCode.GATEWAY_TIMEOUT;
    this.type = this.name;
    this.timestamp = +new Date();
  }
}
