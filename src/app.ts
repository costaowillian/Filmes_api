require("dotenv").config();

import express from "express";
import config from "config";
import router from "./router";
import { MongoClient } from "../config/db";

const main = () => {
    const app = express();

    app.use(express.json());

    app.use("/api", router);

    const port = config.get<number>("port");
    
    app.listen(port, async () => {
        await MongoClient.connect();
        console.log(`Aplicação rodando na porta ${port}!`);
    });
}

main();
