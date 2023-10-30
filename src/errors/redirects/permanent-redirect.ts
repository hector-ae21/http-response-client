import HttpErrorConfig from "../../../types/default-error-types";
import DefaultError from "../default-error";

/**
 * @class PermanentRedirect
 * @description Error class for 308 HTTP status code. This error should be thrown when the resource has been permanently moved to another location.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/308} for more information about the 308 HTTP status code.
 */
class PermanentRedirect extends DefaultError {
    /**
     * @constructor
     * @param {Partial<HttpErrorConfig.KnowError>} config Optional configuration object.
     */
    constructor(config: Partial<HttpErrorConfig.KnowError>) {
        const { msg = "The resource has been permanently moved to another location", ...restConfig } = config || {};
        super(308, { name: "PermanentRedirect", msg, ...restConfig });
    }
}

export default PermanentRedirect;