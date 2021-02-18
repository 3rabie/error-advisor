import {addColors, createLogger, format, transports, Logger} from "winston"

// export const logger = createLogger({
//     level: "info",
//     format: format.combine(
//         format.timestamp(),
//         format.json(),
//     ),
//     transports: [
//         new transports.Console({ level: "info" }),
//         new transports.File({
//             level: 'error',
//             filename: './logs/error.log'
//         })
//     ],
//   })

  const customLevels = {
    levels: {
      trace: 5,
      debug: 4,
      info: 3,
      warn: 2,
      error: 1,
      fatal: 0,
    },
    colors: {
      trace: 'white',
      debug: 'green',
      info: 'green',
      warn: 'yellow',
      error: 'red',
      fatal: 'red',
    },
   };
    
   const formatter = format.combine(
    format.colorize(),
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.splat(),
    format.printf((info) => {
      const { timestamp, level, message, ...meta } = info;
    
      return `${timestamp} [${level}]: ${message} ${
        Object.keys(meta).length ? JSON.stringify(meta, null, 2) : ''
      }`;
    }),
   );
    
   export default class Log {
    private logger: Logger;
    private now = new Date();
    constructor(environment: string) {
      const prodTransport = new transports.File({
        filename: 'logs/error'+this.now+'.log',
        level: 'error',
      });
      const transport = new transports.Console({
        format: formatter,
      });
      this.logger = createLogger({
        level: this.isDevEnvironment(environment) ? 'trace' : 'error',
        levels: customLevels.levels,
        transports: [this.isDevEnvironment(environment) ? transport : prodTransport],
      });
      addColors(customLevels.colors);
    }
    
    trace(msg: any, meta?: any) {
      this.logger.log('trace', msg, meta);
    }
    
    debug(msg: any, meta?: any) {
      this.logger.debug(msg, meta);
    }
    
    info(msg: any, meta?: any) {
      this.logger.info(msg, meta);
    }
    
    warn(msg: any, meta?: any) {
      this.logger.warn(msg, meta);
    }
    
    error(msg: any, meta?: any) {
      this.logger.error(msg, meta);
    }
    
    fatal(msg: any, meta?: any) {
      this.logger.log('fatal', msg, meta);
    }

    isDevEnvironment(environment: string) {
      let isDevEnvironment = false;

      (environment === "development") && (isDevEnvironment = true);

      return isDevEnvironment
    }
   }