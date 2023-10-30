import HttpErrorConfig from "../../../types/default-error-types";
import DefaultError from "../default-error";

/**
 * @class NetworkConnectTimeoutError
 * @description Error class for 599 HTTP status code. This error should be thrown when the connection has timed out.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/599} for more information about the 599 HTTP status code.
 */
class NetworkConnectTimeoutError extends DefaultError {
    /**
     * @constructor
     * @param {Partial<HttpErrorConfig.KnowError>} config Optional configuration object.
     */
    constructor(config: Partial<HttpErrorConfig.KnowError>) {
        const { msg = "The connection has timed out", ...restConfig } = config || {};
        super(599, { name: "NetworkConnectTimeoutError", msg, ...restConfig });
    }
}

export default NetworkConnectTimeoutError;