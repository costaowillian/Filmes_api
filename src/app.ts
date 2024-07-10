import express from "express";
import config from "config";
import router from "./router";

const main = () => {
    const app = express();

    app.use(express.json());

    app.use("/api", router);

    const port = config.get<number>("port");
    
    app.listen(port, async () => {
        console.log(`Aplicação rodando na porta ${port}!`);
    });
}

main();
