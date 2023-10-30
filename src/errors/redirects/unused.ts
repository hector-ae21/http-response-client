import HttpErrorConfig from "../../../types/default-error-types";
import DefaultError from "../default-error";

/**
 * @class Unused
 * @description Error class for 306 HTTP status code. This error should be thrown when the requested resource must be accessed through the proxy given by the Location field.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/306} for more information about the 306 HTTP status code.
 */
class Unused extends DefaultError {
    /**
     * @constructor
     * @param {Partial<HttpErrorConfig.KnowError>} config Optional configuration object.
     */
    constructor(config: Partial<HttpErrorConfig.KnowError>) {
        const { msg = "The requested resource must be accessed through the proxy given by the Location field", ...restConfig } = config || {};
        super(306, { name: "Unused", msg, ...restConfig });
    }
}

export default Unused;