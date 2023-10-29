import { HttpError } from "../types/error-type";

/**
 * @class DefaultError
 * @description Default error class
 */
export default class DefaultError extends Error{
    readonly status: number;
    readonly name: string;
    readonly message: string;

    /**
     * @constructor
     * @param status HTTP status code
     * @param name Error name
     * @param msg Error message
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status} for more information about HTTP status codes.
     */
    constructor(status: number|undefined = undefined, 
        name: string|undefined = undefined, 
        msg: string|undefined = undefined) {
        super();
        this.status = status || 500;
        this.name = name || "unexpected_error";
        this.message = msg || "An unexpected error occurred";
    }

    /**
     * @method toObject
     * @description Returns an object containing the error status, name and message.
     * @returns {HttpError} Returns an object containing the error status, name and message.
     */
    public toObject(): HttpError {
        return {
            status: this.status,
            information: {
                name: this.name,
                message: this.message
            }
        };
    };
}
