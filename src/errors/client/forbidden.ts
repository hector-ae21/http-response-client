import HttpErrorConfig from "../../../types/default-error-types";
import DefaultError from "../default-error";

/**
 * @class Forbidden
 * @description Error class for 403 HTTP status code. This error should be thrown when the client is not authorized to access the requested resource.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403} for more information about the 403 HTTP status code.
 */
class Forbidden extends DefaultError {
    /**
     * @constructor
     * @param {Partial<HttpErrorConfig.KnowError>} config Optional configuration object.
     */
    constructor(config: Partial<HttpErrorConfig.KnowError>) {
        const { msg = "The client is not authorized to access the requested resource", ...restConfig } = config || {};
        super(403, { name: "Forbidden", msg, ...restConfig });
    }
}

export default Forbidden;