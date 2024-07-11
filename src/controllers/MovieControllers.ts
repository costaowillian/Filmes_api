import { Request, Response } from "express";
import { MovieModel } from "../models/Movie";
import Logger from "../../config/logger";
import { promises } from "dns";

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

export const getMovieById = async (req:Request, res:Response) => {
    try {
        const id = req.params.id;
        const movie = await MovieModel.findById(id);

        if(!movie) {
            return res.status(404).json({Error: " O filme não existe."});
        }

        return res.status(200).send(movie);
    } catch (error: any) {
        Logger.error(`Error no sistema ${error.message}`);
        return res.status(500).send("Server error");
    }
}

export const getAllMovies = async (req:Request, res:Response) => {
    try {
        const movies = await MovieModel.find();

        return res.status(200).send(movies);
    } catch (error: any) {
        Logger.error(`Error no sistema ${error.message}`);
        return res.status(500).send("Server error");
    }
}

export const removeMovie = async (req:Request, res:Response) => {
    try {
        const id = req.params.id;
        const movie = await MovieModel.findById(id);

        if(!movie) {
            return res.status(404).json({Error: " O filme não existe."});
        }

        await movie.deleteOne();

        return res.status(204).send();

    } catch (error: any) {
        Logger.error(`Error no sistema ${error.message}`);
        return res.status(500).send("Server error");
    }
}

export const updateMovie = async (req:Request, res:Response) => {
    try {
        const id = req.params.id;
        const data = req.body;

        const movie = await MovieModel.findById(id);

        if(!movie) {
            return res.status(404).json({Error: " O filme não existe."});
        }

        await MovieModel.updateOne({_id: id}, data);

        return res.status(200).send(data);

    } catch (error: any) {
        Logger.error(`Error no sistema ${error.message}`);
        return res.status(500).send("Server error");
    }
}


