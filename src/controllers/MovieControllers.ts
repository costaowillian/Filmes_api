import { Request, Response } from "express";
import { MovieModel } from "../models/Movie";
import Logger from "../../config/logger";

export const createMovie = async (req:Request, res:Response) => {
    try{
        const data = req.body;
        const movie = await MovieModel.create(data);
        return res.status(201).send(movie);
    } catch (error: any) {
        Logger.error(`Error no sistema ${error.message}`);
        return res.status(500).send("Server error");
    }
}