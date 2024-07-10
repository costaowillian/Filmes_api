import morgan, { StreamOptions } from "morgan";
import config from "config";
import Logger from "../../config/logger";

const stream: StreamOptions = {
    write: (message) => Logger.http(message),
}

const skip = ():boolean => {
    const env = config.get<string>("env") || "development";
    return env !== "development";
}

const morganMiddleWare = morgan(
    ":method :url :status :res[content-lengh] - :response-time ms",
    {stream, skip}
);

export default morganMiddleWare;