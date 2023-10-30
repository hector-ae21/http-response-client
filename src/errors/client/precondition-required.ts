import HttpErrorConfig from "../../../types/default-error-types";
import DefaultError from "../default-error";

/**
 * @class PreconditionRequired
 * @description Error class for 428 HTTP status code. This error should be thrown when the server requires the request to be conditional.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/428} for more information about the 428 HTTP status code.
 */
class PreconditionRequired extends DefaultError {
    /**
     * @constructor
     * @param {Partial<HttpErrorConfig.KnowError>} config Optional configuration object.
     */
    constructor(config?: Partial<HttpErrorConfig.KnowError>) {
        const { msg = "The server requires the request to be conditional", ...restConfig } = config || {};
        super(428, { name: "PreconditionRequired", msg, ...restConfig })
    }
}

export default PreconditionRequired;