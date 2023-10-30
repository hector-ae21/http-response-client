import HttpErrorConfig from "../../../types/default-error-types";
import DefaultError from "../default-error";

/**
 * @class InsufficientStorage
 * @description Error class for 507 HTTP status code. This error should be thrown when the server is unable to store the representation needed to complete the request.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/507} for more information about the 507 HTTP status code.
 */
class InsufficientStorage extends DefaultError {
    /**
     * @constructor
     * @param {Partial<HttpErrorConfig.KnowError>} config Optional configuration object.
     */
    constructor(config: Partial<HttpErrorConfig.KnowError>) {
        const { msg = "The server is unable to store the representation needed to complete the request", ...restConfig } = config || {};
        super(507, { name: "InsufficientStorage", msg, ...restConfig });
    }
}

export default InsufficientStorage;