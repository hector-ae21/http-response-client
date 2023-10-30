import HttpErrorConfig from "../../../types/default-error-types";
import DefaultError from "../default-error";

/**
 * @class MovedPermanently
 * @description Error class for 301 HTTP status code. This error should be thrown when the resource requested has been definitively moved to the URL given by the Location headers.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/301} for more information about the 301 HTTP status code.
 */
class MovedPermanently extends DefaultError {
    /**
     * @constructor
     * @param {Partial<HttpErrorConfig.KnowError>} config Optional configuration object.
     */
    constructor(config: Partial<HttpErrorConfig.KnowError>) {
        const { msg = "The resource requested has been definitively moved to the URL given by the Location headers", ...restConfig } = config || {};
        super(301, { name: "MovedPermanently", msg, ...restConfig });
    }
}

export default MovedPermanently;