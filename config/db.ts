import config from "config"
import Logger from "./logger";
import mongoose from "mongoose";

const connect = async () => {
    const url = config.get<string>("dbUri");    

    try{
        await mongoose.connect(url);
        Logger.info("conectado ao banco de dados")
    } catch(e: any) {
        Logger.error("Não foi possível conectar ao banco de dados");
        Logger.error(e);
    }
};

export default connect;