import HttpErrorConfig from "../../../types/default-error-types";
import DefaultError from "../default-error";

/**
 * @class RequestHeaderFieldsTooLarge
 * @description Error class for 431 HTTP status code. This error should be thrown when the server is unwilling to process the request because its header fields are too large.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/431} for more information about the 431 HTTP status code.
 */
class RequestHeaderFieldsTooLarge extends DefaultError {
    /**
     * @constructor
     * @param {Partial<HttpErrorConfig.KnowError>} config Optional configuration object.
     */
    constructor(config?: Partial<HttpErrorConfig.KnowError>) {
        const { msg = "The server is unwilling to process the request because its header fields are too large", ...restConfig } = config || {};
        super(431, { name: "RequestHeaderFieldsTooLarge", msg, ...restConfig })
    }
}

export default RequestHeaderFieldsTooLarge;