import HttpErrorConfig from "../../../types/default-error-types";
import DefaultError from "../default-error";

/**
 * @class InternalServerError
 * @description Error class for 500 HTTP status code. This error should be thrown when the server encounters an unexpected condition that prevented it from fulfilling the request.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/500} for more information about the 500 HTTP status code.
 */
class InternalServerError extends DefaultError {
    /**
     * @constructor
     * @param {Partial<HttpErrorConfig.KnowError>} config Optional configuration object.
     */
    constructor(config?: Partial<HttpErrorConfig.KnowError>) {
        const { msg = "The server encountered an unexpected condition that prevented it from fulfilling the request", ...restConfig } = config || {};
        super(500, { name: "InternalServerError", msg, ...restConfig });
    }
}

export default InternalServerError;