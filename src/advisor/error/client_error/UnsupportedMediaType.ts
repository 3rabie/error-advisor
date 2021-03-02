import { StatusCode } from "../../enum/StatusCode";

export default class UnsupportedMediaType extends Error {
  statusCode: StatusCode;
  type: string;
  timestamp: number;

  constructor(message?: string) {
    message = message || "Request cannot be fulfilled - Payload format is in an unsupported.";
    super(message);
    this.name = "Unsupported Media Type";
    this.statusCode = StatusCode.UNSUPPORTED_MEDIA_TYPE;
    this.type = this.name;
    this.timestamp = +new Date();
  }
}
