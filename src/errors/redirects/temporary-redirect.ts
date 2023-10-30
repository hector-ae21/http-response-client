import HttpErrorConfig from "../../../types/default-error-types";
import DefaultError from "../default-error";

/**
 * @class TemporaryRedirect
 * @description Error class for 307 HTTP status code. This error should be thrown when the request should be repeated with another URI, but future requests can still use the original URI.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/307} for more information about the 307 HTTP status code.
 */
class TemporaryRedirect extends DefaultError {
    /**
     * @constructor
     * @param {Partial<HttpErrorConfig.KnowError>} config Optional configuration object.
     */
    constructor(config: Partial<HttpErrorConfig.KnowError>) {
        const { msg = "The request should be repeated with another URI, but future requests can still use the original URI", ...restConfig } = config || {};
        super(307, { name: "TemporaryRedirect", msg, ...restConfig });
    }
}

export default TemporaryRedirect;