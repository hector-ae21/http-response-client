import HttpErrorConfig from "../../../types/default-error-types";
import DefaultError from "../default-error";

/**
 * @class GatewayTimeout
 * @description Error class for 504 HTTP status code. This error should be thrown when the server did not receive a timely response from an upstream server it needed to access in order to complete the request.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/504} for more information about the 504 HTTP status code.
 */
class GatewayTimeout extends DefaultError {
    /**
     * @constructor
     * @param {Partial<HttpErrorConfig.KnowError>} config Optional configuration object.
     */
    constructor(config: Partial<HttpErrorConfig.KnowError>) {
        const { msg = "The server did not receive a timely response from an upstream server it needed to access in order to complete the request", ...restConfig } = config || {};
        super(504, { name: "GatewayTimeout", msg, ...restConfig });
    }
}

export default GatewayTimeout;