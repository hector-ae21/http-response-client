import HttpErrorConfig from "../../../types/default-error-types";
import DefaultError from "../default-error";

/**
 * @class Unauthorized
 * @description Error class for 401 HTTP status code. This error should be thrown when the request requires user authentication.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/401} for more information about the 401 HTTP status code.
 */
class Unauthorized extends DefaultError {
    /**
     * @constructor
     * @param {Partial<HttpErrorConfig.KnowError>} config Optional configuration object.
     */
    constructor(config?: Partial<HttpErrorConfig.KnowError>) {
        const { msg = "The request requires user authentication", ...restConfig } = config || {};
        super(401, { name: "Unauthorized", msg, ...restConfig })
    }
}

export default Unauthorized;