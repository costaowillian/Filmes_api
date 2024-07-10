require("dotenv").config();

import express from "express";
import config from "config";
import router from "./router";
import { MongoClient } from "../config/db";
import Logger from "../config/logger";

const main = () => {
    const app = express();

    app.use(express.json());

    app.use("/api", router);

    const port = config.get<number>("port");
    
    app.listen(port, async () => {
        await MongoClient.connect();
        Logger.info(`Aplicação rodando na porta ${port}!`);
        Logger.info(`http://localhost:${port}`);
    });
}

main();
