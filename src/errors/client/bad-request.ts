import HttpErrorConfig from "../../../types/default-error-types";
import DefaultError from "../default-error";

/**
 * @class BadRequest
 * @description Error class for 400 HTTP status code. This error should be thrown when the request is malformed or invalid.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/400} for more information about the 400 HTTP status code.
 */
class BadRequest extends DefaultError {
    /**
     * @constructor
     * @param {Partial<HttpErrorConfig.KnowError>} config Optional configuration object.
     */
    constructor(config?: Partial<HttpErrorConfig.KnowError>) {
        const { msg = "Missing or invalid data was provided in the request", ...restConfig } = config || {};
        super(400, { name: "BadRequest", msg, ...restConfig })
    }
}

export default BadRequest;

