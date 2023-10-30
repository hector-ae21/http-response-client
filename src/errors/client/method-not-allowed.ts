import HttpErrorConfig from "../../../types/default-error-types";
import DefaultError from "../default-error";

/**
 * @class MethodNotAllowed
 * @description Error class for 405 HTTP status code. This error should be thrown when the request method is not supported for the requested resource.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/405} for more information about the 405 HTTP status code.
 */
class MethodNotAllowed extends DefaultError {
    /**
     * @constructor
     * @param {Partial<HttpErrorConfig.KnowError>} config Optional configuration object.
     */
    constructor(config: Partial<HttpErrorConfig.KnowError>) {
        const { msg = "The request method is not supported for the requested resource", ...restConfig } = config || {};
        super(405, { name: "MethodNotAllowed", msg, ...restConfig });
    }
}

export default MethodNotAllowed;