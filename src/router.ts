import express ,{ Request, Response } from "express";

const router = express.Router();

router.get("/teste", (req:Request, res:Response) => {
    res.status(200).send("API Funcionando!");
});

export default router;