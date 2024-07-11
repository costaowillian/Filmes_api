import express ,{ Request, Response } from "express";
import { createMovie, getAllMovies, getMovieById, removeMovie, updateMovie } from "./controllers/MovieControllers";
import { validate } from "./middleware/handleValidation";
import { movieCreateValidation } from "./middleware/movieValidations";
import { idParamValidation } from "./middleware/idValidation";

const router = express.Router();

router.get("/teste", (req:Request, res:Response) => {
    res.status(200).send("API Funcionando!");
});

router.post("/movie", movieCreateValidation(), validate, createMovie);

router.get("/movie/:id", idParamValidation(), validate, getMovieById);

router.get("/movie", getAllMovies);

router.delete("/movie/:id", idParamValidation(), validate, removeMovie);

router.patch("/movie/:id", idParamValidation(), movieCreateValidation(), validate, updateMovie);

export default router;