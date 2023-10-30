import HttpErrorConfig from "../../types/default-error-types";
import DefaultError from "./default-error";

/**
 * @description Checks if the error is an instance of DefaultError
 * @param error The error to check
 * @returns {boolean} Returns true if the error is an instance of DefaultError, false otherwise.
 */
const isHttpError = (error: any): boolean => {
    return error instanceof DefaultError;
}

/**
 * @description Creates an instance of DefaultError
 * @param status The HTTP status code
 * @param config The configuration object
 * @returns {DefaultError} Returns an instance of DefaultError
 */
const createError = (status: number, config?: Partial<HttpErrorConfig.Default>): DefaultError => {
    return new DefaultError(status, config);
}

export {
    createError, 
    isHttpError
}
