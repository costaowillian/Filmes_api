import winston, { transport } from "winston";
import config from "config";
import { info } from "console";

const levels = {
    error: 0,
    warn: 1,
    info: 2,
    http: 3,
    debug: 4 
}

const level = ():string => {
    const env = config.get<String>("env") || "development";
    const isDevelopment = env === "development";
    return isDevelopment ? "debug": "warn";
}

const colors = {
    erro: "red",
    warn: "yellow",
    info: "green",
    http: "magenta",
    debig: "white", 
}

winston.addColors(colors);
const format = winston.format.combine(
    winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    winston.format.colorize({all: true}),
    winston.format.printf(
        (info) => `${info.timestamp} - ${info.level}: ${info.message}`
    ),
);

const transports = [
    new winston.transports.Console(),

    new winston.transports.File({
        filename: "logs/error.log",
        level: "error"
    }),

    new winston.transports.File({filename: "logs/all.log"}),
]

const Logger = winston.createLogger({
    level: level(),
    levels,
    format,
    transports
})

export default Logger;