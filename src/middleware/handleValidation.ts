import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";

export const validate = (req: Request, res:Response, next: NextFunction) => {
    const erros = validationResult(req);

    if(erros.isEmpty()) {
        return next();
    }

    const extractedErrors: object[] =[];

    erros.array().map((err) => extractedErrors.push({[err.type]: err.msg}));

    return res.status(402).json({
        erros: extractedErrors,
    });
}