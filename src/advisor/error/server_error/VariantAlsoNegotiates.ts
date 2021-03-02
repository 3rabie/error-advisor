import { StatusCode } from "../../enum/StatusCode";

export default class VariantAlsoNegotiates extends Error {
  statusCode: StatusCode;
  type: string;
  timestamp: number;

  constructor(message?: string) {
    message = message || "Request cannot be fulfilled -  Internal server configuration error.";
    super(message);
    this.name = "Variant Also Negotiates";
    this.statusCode = StatusCode.VARIANT_ALSO_NEGOTIATES;
    this.type = this.name;
    this.timestamp = +new Date();
  }
}
