import { createError, isHttpError } from "../errors";
import DefaultError from "../errors/default-error";
import { Response } from "express";

export default class ErrorResponseMiddleware {
    /**
     * @method errorCatcher
     * @description middleware to response with an error
     * @param {Error} err
     * @param {Response} res
     * @memberof ErrorMiddleware
     */
    public static async errorCatcher(err: Error, res: Response): Promise<void> {
        let error: DefaultError = createError(500, { name:err.name, msg: err.message });
        if (isHttpError(err))
            error = err as DefaultError;
        res.status(error.status).json(error.response);
    }
}