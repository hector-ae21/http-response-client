import HttpErrorConfig from "../../../types/default-error-types";
import DefaultError from "../default-error";

/**
 * @class NotFound
 * @description Error class for 404 HTTP status code. This error should be thrown when the requested resource could not be found but may be available in the future.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/404} for more information about the 404 HTTP status code.
 */
class NotFound extends DefaultError {
    /**
     * @constructor
     * @param {Partial<HttpErrorConfig.KnowError>} config Optional configuration object.
     */
    constructor(config: Partial<HttpErrorConfig.KnowError>) {
        const { msg = "The requested resource could not be found but may be available in the future", ...restConfig } = config || {};
        super(404, { name: "NotFound", msg, ...restConfig });
    }
}

export default NotFound;