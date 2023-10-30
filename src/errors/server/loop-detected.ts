import HttpErrorConfig from "../../../types/default-error-types";
import DefaultError from "../default-error";

/**
 * @class LoopDetected
 * @description Error class for 508 HTTP status code. This error should be thrown when the server detected an infinite loop while processing the request.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/508} for more information about the 508 HTTP status code.
 */
class LoopDetected extends DefaultError {
    /**
     * @constructor
     * @param {Partial<HttpErrorConfig.KnowError>} config Optional configuration object.
     */
    constructor(config: Partial<HttpErrorConfig.KnowError>) {
        const { msg = "The server detected an infinite loop while processing the request", ...restConfig } = config || {};
        super(508, { name: "LoopDetected", msg, ...restConfig });
    }
}

export default LoopDetected;