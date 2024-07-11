import { param } from "express-validator";

export const idParamValidation = () => {
    return [
        param('id').isLength({min: 24}).withMessage("Verifique o Id enviado.").isLength({max: 24}).withMessage("Verifique o Id enviado."),
    ]
}