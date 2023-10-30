import HttpErrorConfig from "../../../types/default-error-types";
import DefaultError from "../default-error";

/**
 * @class LengthRequired
 * @description Error class for 411 HTTP status code. This error should be thrown when the server refuses to accept the request without a defined Content-Length header.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/411} for more information about the 411 HTTP status code.
 */
class LengthRequired extends DefaultError {
    /**
     * @constructor
     * @param {Partial<HttpErrorConfig.KnowError>} config Optional configuration object.
     */
    constructor(config?: Partial<HttpErrorConfig.KnowError>) {
        const { msg = "The server refuses to accept the request without a defined Content-Length header", ...restConfig } = config || {};
        super(411, { name: "LengthRequired", msg, ...restConfig })
    }
}

export default LengthRequired;