import { StatusCode } from "../../enum/StatusCode";

export default class LoopDetected extends Error {
  statusCode: StatusCode;
  type: string;
  timestamp: number;

  constructor(message?: string) {
    message = message || "Request cannot be fulfilled - Operation terminated due an infinite loop.";
    super(message);
    this.name = "Loop Detected";
    this.statusCode = StatusCode.LOOP_DETECTED;
    this.type = this.name;
    this.timestamp = +new Date();
  }
}
