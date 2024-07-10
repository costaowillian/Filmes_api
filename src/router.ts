import express ,{ Request, Response } from "express";
import { createMovie } from "./controllers/MovieControllers";

const router = express.Router();

router.get("/teste", (req:Request, res:Response) => {
    res.status(200).send("API Funcionando!");
});

router.post("/movie", createMovie);

export default router;