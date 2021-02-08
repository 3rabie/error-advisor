import {createLogger, format, transports} from "winston"

export const logger = createLogger({
    level: "info",
    format: format.combine(
        format.timestamp(),
        format.json(),
    ),
    transports: [
        new transports.Console({ level: "info" }),
        new transports.File({
            level: 'error',
            filename: './logs/error.log'
        })
    ],
  })