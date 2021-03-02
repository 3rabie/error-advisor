import { throws } from "assert";
import { StatusCode } from "../../enum/StatusCode";

export default class UnprocessableEntity extends Error {
  statusCode: StatusCode;
  type: string;
  timestamp: number;

  constructor(message?: string) {
    message = message || "Request cannot be fulfilled - Unable to process the contained instructions.";
    super(message);
    this.name = "Unprocessable Entity";
    this.statusCode = StatusCode.UNPROCESSABLE_ENTITY;
    this.type = this.name;
    this.timestamp = +new Date();
  }
}
